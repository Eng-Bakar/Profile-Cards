function Profile({bio, name, BtnColor, image}){
 return   <div className="px-[20px] py-[30px] ml-[-10px] sm:ml-[30px] ">
        <div className="w-[320px] border-[2px] border-solid px-[20px] border-blue-500 h-[420px] sm:h-[400px] ">
            <img className="rounded-[30px] py-[10px] px-[10px]" src={image} alt="" />
            <h1 className="text-[30px] text-center font-semibold mb-[10px]"> {name}</h1>
            <div className="flex gap-[10px]  text-center">
                <div className="bg-blue-500 w-[80px] h-[25px] rounded-[6px] text-center font-semibold">
                    <h1> HTML </h1>
                </div>
                <div className="bg-red-500 w-[80px] h-[25px] rounded-[6px] text-center font-semibold">
                    <h1> CSS </h1>
                </div>
                <div className="bg-green-500 w-[80px] h-[25px] rounded-[6px] text-center font-semibold">
                    <h1> JS </h1>
                </div>
            </div>
            <p> {bio}.</p>
        <button style={{backgroundColor: BtnColor}} className="w-[90%] font-semibold mt-[10px] rounded-[10px] h-[40px]"> Read More </button>

        </div>
    </div>
}
export default Profile 