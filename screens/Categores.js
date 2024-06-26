import React from 'react'
import ServiceCard from '../components/ServiceCard';
import { useGetAllCategoresQuery } from '../redux/features/category/category';
import ServiceLoader from '../components/UI/ServiceLoader';

const Categores = () => {
    const { data, isLoading } = useGetAllCategoresQuery();
    const { categories = [] } = data || {};
    let content = null;
    if (isLoading) {
        content = <>
            <ServiceLoader key={1} />
            <ServiceLoader key={2} />
            <ServiceLoader key={3} />
            <ServiceLoader key={4} />
        </>;
    } else if (categories) {
        content = categories?.map((service) => <ServiceCard key={service._id} data={service} />)
    }
    return content;
}

export default Categores;
