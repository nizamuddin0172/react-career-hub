
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>
                    Career Hub | Home
                </title>
            </Helmet>
            <h2 className='text-4xl text-center'>This is home</h2>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;