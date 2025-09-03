'use client'
import React, { useEffect, useState } from 'react'
import { getBanners } from '@/app/_actions/banner_actions'
import { Banners } from '@/generated/prisma'
import styles from './page.module.css'
export default function ListBannersPage() {
  const [banners, setBanners] = useState<Banners[]>([])
  useEffect(() => {
    const fetchBanners = async () => {
      const data = await getBanners()
      setBanners(data)
    }
    fetchBanners()
  }, [])
  return (
    <div>ListBannersPage
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image URL</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {banners.length==0 && (
                    <tr>
                        <td colSpan={5}>No banners</td>
                    </tr>
                )}
                {banners.map(banner => (
                    <tr key={banner.id}>
                        <td>{banner.id}</td>
                        <td>{banner.title}</td>
                        <td>{banner.imageUrl}</td>
                        <td>{banner.description}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
