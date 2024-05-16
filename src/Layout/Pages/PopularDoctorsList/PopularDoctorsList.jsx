import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const PopularDoctorsList = () => {
    return (
        <div className="relative pt-9 pb-8 px-5">
            {/* Heading starts */}
            <div className="absolute top-9 left-0 flex text-center w-full px-5">
                <div>
                    <Link to={'/'}>
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="25" height="25" fill="url(#pattern0_149_75)" />
                            <defs>
                                <pattern id="pattern0_149_75" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_149_75" transform="scale(0.0111111)" />
                                </pattern>
                                <image id="image0_149_75" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABY0lEQVR4nO3cvUrEQBiF4W8t/IGZdGGmEGxSnRvVQmRbGy/CYvGOrARRwVKJWtho5c6Yk/eB7QQ/Xg5Zi2AEAAAAAAAAFmY6GlK5zKk85FRfci7XEacnva9yjLwbcn37/vmMjb1G/gid6tNf/ZaVm36M/BX6sfeF9pGH+ZPKVe8r1xB5N/9c70sXTIdDqre/Rc6p3EWcHfe+dMFE5P0jMpE9iMcFkS2IJRPZglgykS2IJRPZglgykS2IJRPZglgykS2IJRPZglgykS2IJRPZwsTLLS3kXC94g6iBIdd73iAitI+c6zmPjiYmvgzbEX9DE9uSWDaxLYllE9uSWDaxLYllE9uSWDaxLYllE9uSWDaxLYllE9uSWDaxLYllE9uSWHY7xG6Il3T+Wey6bXnRmv9l5nNEbHpfuYLY5TUiDnpf6B871Zvel5nGrtv5cTEveY48jmPqfZWzDc9lAAAAAADC2TsHapabz52pEgAAAABJRU5ErkJggg==" />
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="text-center">
                <h1 className="font-bold text-[20px]">Popular Doctors</h1>
            </div>
            {/* Headinng Ends */}


            <div className="mt-7 grid gap-3">
                <div className="bg-white shadow-md p-[10px] rounded-[10px] relative">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20">
                            <img className="w-full h-full rounded-[10px]" src={'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=1380&t=st=1715833190~exp=1715833790~hmac=bd849ca4be6e495e276c25b52402d2cf68167d0d34840426a5b353ba7f5ded16'} alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h3 className="font-bold">John Wilson</h3>
                                <p className="font-medium text-[14px]">Cardiology</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <IoLocationOutline />
                                <p>1.0km away</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 bg-[#FEFCF5] p-1 rounded-[5px] w-fit absolute top-2 right-2">
                        <div>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.199951" width="18" height="18" fill="url(#pattern0_149_126)" />
                                <defs>
                                    <pattern id="pattern0_149_126" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_149_126" transform="scale(0.0104167)" />
                                    </pattern>
                                    <image id="image0_149_126" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFs0lEQVR4nO2dS4hcRRSGy2cUFTQ+8BFQNOI4mXtOj4MgGh/EjfhCfG0UXakQF6ILn6CDgtkpgqAuBI0bMy58RDLEV6fP6RlNzMKFImpIfARfUTNddduYRNNybjc6DJN0375153bdnA/+ZXKr/r/uTVfVqYoxiqIoiqIoiqIoitKNeAOMWsZJS9BsC9fFdax0/YNKdppTlQsdY+wYW3MUNzkaU49zxhJsmsf8jmCjBpCn+bXosv2b35atR5dqCDnhGCa6BkCwRgPIgWZ99HRLsKdrAAx7m9VoiYbgGUfwVDfz/xPhkxqAR1qfDx9pCX/uOQCGX1vrli7SEDzhCG/v3fyO6nibBuArAMZPUgdA+LEG4IG4Fl2Q2vyOZNKmIWTEEr7abwCW4BUNIIv51bGTLOOuvgNg/MtNwSkaQt+jP3q0X/NnzQse0QD6oFW9/HDL+H3mAAi2tzaPHaEhpB39Nbgpq/mz3oIbNYC0ARBUvQVA8JEGkALHuMwS7vMVQCIaAQ2h1wAIXvRqfhIAvqAB9MDOKh6/nx2vrJ+h5sz08GINofvof8D76P//LbhfAzgArZY5xDF+lWMAW1otc6iGsB8aNbwmN/M7iuuVqzWAuSN/3dJFzWk8wxKszzsAeYY8q/T7BTMcnZD8nGRY3mC4zjLe7RjHLeNzlnG1ZXjfMXxhGX60hP/kbfy8YTDuSp7PuNkxrm23K2nfQzHDHe12w/IZjs4eiNm0LGxJZYLMUi1VVlqCJyzB853N8poYKrtRRZjpFkTSN+lj0tcJ6Xvbg8rKxBPxhionezd+pr7sHMv4YfEGYBCyjB/IW+PH/OnhxZbg26I75cLTVpnTZA7AEj42AJ1phSjL8HD2ABgni+6IC1bwbuYA5NdB8R3BQAVv+gjg3uI7gkHKMt6TOYBW9cyjHMNU0Z1xwQnq3iZ7MqnyuUFSdlmCqnhmcigP7LtE5GCRJVgjXw2v5s9ZrRz3vlvF5ZAsY4hHJm9irtxpCXcX3WE3IJKSeFnrMguJq8EKx7Cz6M67okVoY4KrTBFYqgw7hm0H7cgn2B5zBU2RxNXhUw98cK6csgSfyb6CGQR+Wg/HOIa3DhrzGSd31M87zgwSrYlbDpNfAUWb43IXvCRlk2ZQcRzdZxn+Lt2op+Sn97gJAUt4g9ThlMZ8TkrkbzUhIadT0h2swwEV7LCEl5gQ2VnFszp7qKGa/3VjQ+VcEzKyLSfVyQGaX5cTOqYMhLaQZwlfz21BrSjaC3khzJph24IsqC007T2FYgqwXLrRv6+UVdQNgmuLNtf1KKlRNWXDEa4q2ljXqwifNmXDEXJAAZApE7I5neXAtVtgyQHvUlVPy0yyaFNdSjVqlYtNWZBy76INdWnfAsIHTVlwhO8UbahLK8K3TYkmYDvCCwB+K8WErL1vPACGcnrZDaPnm9DpHE0KMwDCu0zohLQI58p44ZOczS3aSNevCL4xISMlK4WbyNkU18ZOM6FiKbo5X4NgopfrjLNI+mBCxRI8m9enIZ5VDugYr8hr69MyPGNCxRJ86nc0wp9SGjLfOo0cpJaSGMfoPD9zkwkRqZaTqmGPZqyVTf5uz02uPGBc7fEN2PtLdfhYExqOoiv9fG5wSz8XbCTV24RfemlDDVaY0JAj/F4+N9X+N8dnfZYyXQBlCR43oWEJ3svyuZnxddRfPkvVaIljfCNDAOtNSEihrhxc6KOzWxv16Pq82iV/tzyjj8+glT6ZkP63i5QjbI9UVi/EP3at6YuO7lybk2qHTiaVJhQaG4dO7PUgn2WcLKL8T57Z6zUMSamK72OneSOlfV1G/XeDcKOttEHaUrpNejk75Rj/mGc07ZYSFZknmAEhOeFDuGrek5+Ev7spGDEhMjM9utQyvGYZf0gu4iZ82U6NDJkBxU6NDCVtbLdXtFouqyq6XYqiKIqiKIqiKIqiKMYP/wJ4lvATmi3JUAAAAABJRU5ErkJggg==" />
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[14px]">4.5</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md p-[10px] rounded-[10px] relative">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20">
                            <img className="w-full h-full rounded-[10px]" src={'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=1380&t=st=1715833190~exp=1715833790~hmac=bd849ca4be6e495e276c25b52402d2cf68167d0d34840426a5b353ba7f5ded16'} alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h3 className="font-bold">John Wilson</h3>
                                <p className="font-medium text-[14px]">Cardiology</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <IoLocationOutline />
                                <p>1.0km away</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 bg-[#FEFCF5] p-1 rounded-[5px] w-fit absolute top-2 right-2">
                        <div>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.199951" width="18" height="18" fill="url(#pattern0_149_126)" />
                                <defs>
                                    <pattern id="pattern0_149_126" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_149_126" transform="scale(0.0104167)" />
                                    </pattern>
                                    <image id="image0_149_126" width="96" height="96" xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[14px]">4.5</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md p-[10px] rounded-[10px] relative">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20">
                            <img className="w-full h-full rounded-[10px]" src={'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=1380&t=st=1715833190~exp=1715833790~hmac=bd849ca4be6e495e276c25b52402d2cf68167d0d34840426a5b353ba7f5ded16'} alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h3 className="font-bold">John Wilson</h3>
                                <p className="font-medium text-[14px]">Cardiology</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <IoLocationOutline />
                                <p>1.0km away</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 bg-[#FEFCF5] p-1 rounded-[5px] w-fit absolute top-2 right-2">
                        <div>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.199951" width="18" height="18" fill="url(#pattern0_149_126)" />
                                <defs>
                                    <pattern id="pattern0_149_126" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_149_126" transform="scale(0.0104167)" />
                                    </pattern>
                                    <image id="image0_149_126" width="96" height="96" xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[14px]">4.5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDoctorsList;