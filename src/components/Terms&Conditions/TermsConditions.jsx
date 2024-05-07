import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <div className="min-h-svh pt-9 relative pb-8 px-5">
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
                <h1 className="font-bold text-[20px]">Terms & Conditions</h1>
            </div>
            <div className=''>
                <div className='my-6'>
                    <p className='text-[14px] text-[#868686] mb-2'>Last update 25/6/2022</p>
                    <p>Please read these terms of service, carefully before using our app operated by us.</p>
                </div>
                <div>
                    <h3 className='text-[#7563F7] font-bold mb-3'>Conditions of Uses</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam, modi molestias repellat deserunt reprehenderit ducimus, ipsa consequatur illo corrupti nam atque assumenda voluptate vero possimus, aperiam voluptatibus veniam. Consequatur doloribus voluptas atque rem harum distinctio odit earum hic perferendis nemo incidunt necessitatibus accusantium sed, totam excepturi quibusdam fugiat quod eaque. Voluptatum vitae dolor dicta explicabo neque magnam reiciendis aliquam sit animi autem eum officiis, assumenda nihil eveniet. Quidem facilis quod nihil odio, facere officiis voluptatum accusamus sequi deleniti illo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;