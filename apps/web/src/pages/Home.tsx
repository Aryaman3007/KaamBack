import search from '../assets/search.png';
import { slides } from '../data/carouselData.json';
import Carousel from '../components/Carousel';
import design from '../assets/img1.png';
import digital from '../assets/img2.png';
import business from '../assets/img3.png';
import tech from '../assets/img4.png';
import blockchain from '../assets/img5.png';

const categories = [
  { src: design, label: 'Design' },
  { src: digital, label: 'Digital Marketing' },
  { src: business, label: 'Business' },
  { src: tech, label: 'Programming & Tech' },
  { src: blockchain, label: 'Blockchain' }
];

const Home = () => {
  return (
    <div>
      <div className="bg-custom-100 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <section className="py-20 lg:py-60 flex flex-col items-center">
            <h2 className="text-2xl lg:text-4xl font-semibold text-white text-center">
              Empowering your next project :
            </h2>
            <h2 className="text-2xl lg:text-4xl font-semibold text-custom-200 italic mt-4 text-center">
              Connect &nbsp; Collaborate &nbsp; Succeed
            </h2>
            <div className="bg-white w-11/12 lg:w-[530px] h-[60px] rounded-full mt-10 flex justify-between">
              <p className="self-center lg:text-md text-s font-semibold italic ml-8 text-custom-300">
                So.. What you want to be done today..
              </p>
              <div className="bg-blue-300 w-[100px] rounded-full flex justify-center items-center">
                <img src={search} className="h-[32px] w-[32px]" />
              </div>
            </div>
          </section>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-11/12 lg:max-w-lg py-20">
            <Carousel autoSlide={true}>
              {slides.map((item, idx) => (
                <img src={item.src} alt={item.alt} key={idx} className="w-full lg:w-auto" />
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 lg:px-28 py-12">
        <h2 className="text-2xl font-bold text-center lg:text-left">What You Seek, We Deliver</h2>
        <div className="flex flex-wrap justify-center gap-x-[30px] lg:gap-x-[120px] gap-y-[40px] lg:gap-y-[80px] mt-[40px] lg:mt-[50px]">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-custom-400 w-[250px] lg:w-[350px] h-[230px] rounded-2xl flex flex-col items-center">
              <img src={category.src} className="w-[70px] h-[70px] mt-[30px]" />
              <p className="text-xl font-ptSans font-semibold mt-[40px]">{category.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
