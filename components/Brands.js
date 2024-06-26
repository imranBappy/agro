import React from 'react'
import { useGetAllBrandsQuery } from '../redux/features/brand/brandApi';
import ServiceCard from './ServiceCard';
import ServiceLoader from './UI/ServiceLoader';

const Brands = () => {
    const { data, isLoading } = useGetAllBrandsQuery();
    const { brands = [] } = data || {};
    let content = null;
    if (isLoading) {
        content = <>
            <ServiceLoader key={1} />
            <ServiceLoader key={2} />
            <ServiceLoader key={3} />
            <ServiceLoader key={4} />
        </>;
    } else if (brands) {
        content = brands?.map((service) => <ServiceCard key={service._id} data={service} />)
    }
    return content;
}

export default Brands
