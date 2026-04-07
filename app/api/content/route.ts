import { NextRequest, NextResponse } from 'next/server';
import { ContentService } from '@/services/content.service';
import { ContentUpdateSchema } from '@/lib/validations/content.schema';

/**
 * GET: Retrieve all site content.
 * Used for the landing page to fetch current copy.
 */
export async function GET() {
  try {
    const content = await ContentService.getContent();
    return NextResponse.json(content, { status: 200 });
  } catch (error: any) {
    console.error('API_CONTENT_GET', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}

/**
 * PUT: Update all site content.
 * Used by the admin dashboard for editing text content.
 * Includes Zod validation.
 */
export async function PUT(request: NextRequest) {
  try {
    // 1. Get request body
    const body = await request.json();

    // 2. Validate input using Zod
    const validation = ContentUpdateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: 'Invalid data', errors: validation.error.format() },
        { status: 400 }
      );
    }

    // 3. Optional: Add Authentication Check Here
    // For now, this is a placeholder
    const isAuthorized = true; // Replace with logic checking auth token/session
    if (!isAuthorized) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // 4. Update via service layer
    const updatedContent = await ContentService.updateContent(validation.data);

    return NextResponse.json(updatedContent, { status: 200 });
  } catch (error: any) {
    console.error('API_CONTENT_PUT', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}
