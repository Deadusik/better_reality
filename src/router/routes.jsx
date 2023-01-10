import Home from '../components/pages/home/Home'
import AboutCity from '../components/pages/about_city/AboutCity'
import AboutUs from '../components/pages/about_us/AboutUs'
import Apartment from '../components/pages/apartment/Apartment'
import ApartmentList from '../components/pages/apartment_list/ApartmentList'
import Contacts from '../components/pages/contacts/Contacts'
import Error from '../components/pages/error/Error'

export const routes = [
    {
        path: '/',
        element: <Home />,
        error: <Error />
    },
    {
        path: 'aboutcity',
        element: <AboutCity />,
        error: <Error />
    },
    {
        path: 'aboutus',
        element: <AboutUs />,
        error: <Error />
    },
    {
        path: 'apartment',
        element: <Apartment />,
        error: <Error />
    },
    {
        path: 'apartmentlist',
        element: <ApartmentList />,
        error: <Error />
    },
    {
        path: 'contacts',
        element: <Contacts />,
        error: <Error />
    },
    {
        path: '*',
        element: <Error />
    }
]