import menuIcon from './assets//menu.png';
import plusIcon from './assets/plus.png';
import "./bundle.css";

export default function Gemini() {
  return (
    <div className="flex">
      <div className="sidebar min-h-[100vh] inline-flex justify-between flex-col px-[15px] py-[25px] bg-slate-50">
        <div className='top'>
            <img
            className=" block ml-[10px] cursor-pointer w-5"
            src={menuIcon}
            alt=""
            />
            <div className='new-chat bg-gray-200 rounded-full px-[15px] py-[10px] cursor-pointer mt-14'>
                <img className='block w-5' src={plusIcon} alt="" />
            </div>
        </div>
        <div className="bottom">

        </div>
      </div>
      <div className="main flex-1 min-h-[100vh]">main</div>
    </div>
  );
}
