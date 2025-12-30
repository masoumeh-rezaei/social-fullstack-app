// app/actions/getFileDetails.ts
"use server";

import { imagekit } from "@/utils";

export async function getFileDetails(fileId: string) {
    return imagekit.getFileDetails(fileId);
}
