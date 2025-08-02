import { ProductsDataTable } from '@/components/dashboard/ProductsDataTable'
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import React from 'react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/dashboard/products',
    },
];

export default function Products() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
     <Head title='Products'/>
        <div className='flex h-full flex-1 flex-col gap-4 rounded-xl p-4'>
          <ProductsDataTable/>
        </div>
   </AppLayout>
  )
}



