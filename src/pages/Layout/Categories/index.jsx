import React from 'react';
import CategoryCard from '../../../components/Ui/Categories';
import './style.scss';

const Categories = () => {
    const leng = [1, 2, 3, 4, 5, 6]
    return (
        <section id='categories'>
            <div className='container mx-auto px-5'>
                <CategoryCard/>
       
            </div>
        </section>
    )
}

export default Categories