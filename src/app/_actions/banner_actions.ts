'use server'
import prisma from '@/db/store_db';
import { Banners } from '@/generated/prisma';
export async function getBanners(): Promise<Banners[]> {
    return await prisma.banners.findMany();
}