
import Card from './Card'
const Spectare=()=>{
    const magazines=[
        {
            img:"https://res.cloudinary.com/dkzfmq7bk/image/upload/v1694708741/spectare/spectre3_lnmg28.png",
            description:'The 3rd Edition of The Annual Newsletter of ECS',
            link:'https://drive.google.com/file/d/1F1pZ5Lc7NUv4RoIYFK_e2_Opmuj580MF/view?fbclid=IwAR0C7OYHftG-UT3yVXwnyFD0MOfu-VJNAgRxQo8m1D5iRidFm_ARxqeK87o'
        },
        {
            img:'https://res.cloudinary.com/dkzfmq7bk/image/upload/v1694711628/spectare/spectre4_tz3tok.png',
            description:'The 4th Edition of The Annual Newsletter of ECS',
            link:'https://drive.google.com/file/d/1uepgokTi5zm5G752cmf6DttjEnk8zEpq/view?fbclid=IwAR3peC42s7Il4BKYsC-JEgOHkOckTOQA37pWWrXJuJw0DF04FavX2Mc9WOI'
        },
        {
            img:'https://res.cloudinary.com/dkzfmq7bk/image/upload/v1694712007/spectare/spectre6_stxzxt.png',
            description:'The 6th Edition of The Annual Newsletter of ECS',
            link:'https://drive.google.com/file/d/1wGRjeHarooIcUlQ0vEtFsF311M1veMbf/view?usp=drive_link'
        }
    ];
    return(
        <div className='spectare' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            {magazines.map((item)=><Card img={item.img} description={item.description} link={item.link}/>)}
        </div>
    );
}
export default Spectare;