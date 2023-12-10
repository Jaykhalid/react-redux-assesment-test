import React  from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "../components";

export const Dashboard = () => {
    const { collapseSidebar, collapsed } = useProSidebar();

    return (
        <div className="row">
        <div className="bg-gray-100 font-poppins h-[900px] mx-auto relative w-full">
        <div className="md:h-[3958px] h-[900px] m-auto md:px-5 w-full">
          <Line className="absolute bg-gray-500 h-px inset-x-[0] mx-auto top-[12%] w-full" />
          <Line className="absolute bg-gray-500 bottom-[0] h-[788px] left-[8%] w-px" />
          <div className="absolute bottom-[2%] flex md:flex-col flex-row gap-[11px] items-start justify-start right-[1%] w-[91%]">
            <div className="flex flex-col items-center justify-start w-[66%] md:w-full">
              <div className="md:gap-5 gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 justify-start pb-[7px] rounded-[10px] w-full">
                  <div className="h-[203px] relative w-full">
                    <div className="absolute bg-white-A700 h-[203px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                    <Img
                      className="absolute h-[169px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_191b609977ad6.png"
                      alt="191b609977adSix"
                    />
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start md:ml-[0] ml-[11px]">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="md:h-[327px] h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[30px] h-full inset-[0] items-start justify-center m-auto p-1.5 rounded-[10px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] mt-[209px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[169px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_1196f2d94ba17.png"
                      alt="1196f2d94baSeventeen"
                    />
                  </div>
                </div>
                <div className="md:h-[327px] h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[30px] h-full inset-[0] items-start justify-center m-auto p-1.5 rounded-[10px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] mt-[209px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[169px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_15134ce2d23b1.png"
                      alt="15134ce2d23bOne"
                    />
                  </div>
                </div>
                <div className="md:h-[327px] h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[30px] h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-[10px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] mt-[207px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[3px] rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[194px] md:h-auto object-cover w-[99%]"
                      src="images/img_18904a005ef9a.png"
                      alt="18904a005ef9a"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 justify-start pb-[7px] rounded-[10px] w-full">
                  <div className="h-[203px] relative w-full">
                    <div className="absolute bg-white-A700 h-[203px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                    <Img
                      className="absolute h-[169px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_191b609977ad6.png"
                      alt="191b609977adSix"
                    />
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start md:ml-[0] ml-[11px]">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="md:h-[327px] h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[30px] h-full inset-[0] items-start justify-center m-auto p-1.5 rounded-[10px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] mt-[209px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[169px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_1196f2d94ba17.png"
                      alt="1196f2d94baSeventeen"
                    />
                  </div>
                </div>
                <div className="md:h-[327px] h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[30px] h-full inset-[0] items-start justify-center m-auto p-1.5 rounded-[10px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] mt-[209px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[169px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_15134ce2d23b1.png"
                      alt="15134ce2d23bOne"
                    />
                  </div>
                </div>
                <div className="md:h-[327px] h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[30px] h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-[10px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] mt-[207px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[3px] rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[194px] md:h-auto object-cover w-[99%]"
                      src="images/img_18904a005ef9a.png"
                      alt="18904a005ef9a"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 justify-end pb-[7px] rounded-[10px] w-full">
                  <div className="h-[203px] relative w-full">
                    <div className="absolute bg-white-A700 h-[203px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                    <Img
                      className="absolute h-[169px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_191b609977ad6.png"
                      alt="191b609977adSix"
                    />
                  </div>
                  <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] ml-[11px] mr-[47px]">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[27px] h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-[10px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] mt-[209px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[169px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_1196f2d94ba17.png"
                      alt="1196f2d94baSeventeen"
                    />
                  </div>
                </div>
                <div className="h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[27px] h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-[10px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] mt-[209px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[169px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_15134ce2d23b1.png"
                      alt="15134ce2d23bOne"
                    />
                  </div>
                </div>
                <div className="md:h-[326px] h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[26px] h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-[10px] w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[207px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[3px] rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[194px] md:h-auto object-cover w-[99%]"
                      src="images/img_18904a005ef9a.png"
                      alt="18904a005ef9a"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 justify-end pb-[7px] rounded-[10px] w-full">
                  <div className="h-[203px] relative w-full">
                    <div className="absolute bg-white-A700 h-[203px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                    <Img
                      className="absolute h-[169px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_191b609977ad6.png"
                      alt="191b609977adSix"
                    />
                  </div>
                  <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] ml-[11px] mr-[47px]">
                    <Text
                      className="text-black-900 text-xl w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[27px] h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-[10px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] mt-[209px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[169px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_1196f2d94ba17.png"
                      alt="1196f2d94baSeventeen"
                    />
                  </div>
                </div>
                <div className="h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[27px] h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-[10px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] mt-[209px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[169px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_15134ce2d23b1.png"
                      alt="15134ce2d23bOne"
                    />
                  </div>
                </div>
                <div className="md:h-[326px] h-[329px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col gap-[26px] h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-[10px] w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[207px] text-black-900 text-xl w-3/4 sm:w-full"
                      size="txtManropeBold20"
                    >
                      Strawberry Pancake
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] text-black-900 text-lg"
                      size="txtInterBold18"
                    >
                      <span className="text-black-900 font-manrope text-left font-normal">
                        Rp
                      </span>
                      <span className="text-black-900 font-manrope text-left font-bold">
                        {" "}
                        28,000
                      </span>
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[3px] rounded-[10px] top-[0] w-[99%]">
                    <Img
                      className="h-[194px] md:h-auto object-cover w-[99%]"
                      src="images/img_18904a005ef9a.png"
                      alt="18904a005ef9a"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[34%] md:w-full">
              <div className="flex flex-col gap-[9px] items-center justify-end w-full">
                <List
                  className="flex flex-col gap-[9px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col items-end justify-end my-0 p-[19px] rounded-[5px] w-full">
                    <div className="flex flex-col items-start justify-start mr-[5px] mt-0.5 w-[88%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsBold20"
                        >
                          Strawberry Pancake
                        </Text>
                        <Text
                          className="text-center text-gray-500 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          QTY
                        </Text>
                      </div>
                      <div className="flex flex-row font-inter items-start justify-between mt-0.5 w-[96%] md:w-full">
                        <Text
                          className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtInterBold25"
                        >
                          <span className="text-black-900 font-poppins text-left font-normal">
                            Rp
                          </span>
                          <span className="text-black-900 font-poppins text-left font-bold">
                            {" "}
                            28,000
                          </span>
                        </Text>
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                          size="txtInterRegular30"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-end justify-end my-0 p-[18px] rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start mr-1.5 mt-1 w-[87%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsBold20"
                        >
                          Strawberry Pancake
                        </Text>
                        <Text
                          className="text-center text-gray-500 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          QTY
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-0.5 w-[98%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtPoppinsRegular25"
                        >
                          <span className="text-black-900 font-poppins text-left font-normal">
                            Rp{" "}
                          </span>
                          <span className="text-black-900 font-poppins text-left font-bold">
                            56.000
                          </span>
                        </Text>
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                          size="txtInterRegular30"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="h-28 md:h-[109px] relative w-full">
                  <div className="flex flex-col h-full items-start justify-start ml-auto mr-[25px] my-auto w-4/5">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsBold20"
                      >
                        Strawberry Pancake
                      </Text>
                      <Text
                        className="text-center text-gray-500 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        QTY
                      </Text>
                    </div>
                    <div className="flex flex-row font-inter items-start justify-between mt-0.5 w-[96%] md:w-full">
                      <Text
                        className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtInterBold25"
                      >
                        <span className="text-black-900 font-poppins text-left font-normal">
                          Rp
                        </span>
                        <span className="text-black-900 font-poppins text-left font-bold">
                          {" "}
                          28,000
                        </span>
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                        size="txtInterRegular30"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[19px] rounded-[5px] w-full">
                    <div className="flex flex-col items-start justify-start mr-[5px] mt-0.5 w-[88%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsBold20"
                        >
                          Strawberry Pancake
                        </Text>
                        <Text
                          className="text-center text-gray-500 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          QTY
                        </Text>
                      </div>
                      <div className="flex flex-row font-inter items-start justify-between mt-0.5 w-[96%] md:w-full">
                        <Text
                          className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtInterBold25"
                        >
                          <span className="text-black-900 font-poppins text-left font-normal">
                            Rp
                          </span>
                          <span className="text-black-900 font-poppins text-left font-bold">
                            {" "}
                            28,000
                          </span>
                        </Text>
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                          size="txtInterRegular30"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-[9px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col items-end justify-end p-[19px] rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start mr-[5px] mt-0.5 w-[88%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsBold20"
                        >
                          Strawberry Pancake
                        </Text>
                        <Text
                          className="text-center text-gray-500 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          QTY
                        </Text>
                      </div>
                      <div className="flex flex-row font-inter items-start justify-between mt-0.5 w-[99%] md:w-full">
                        <Text
                          className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtInterBold25"
                        >
                          <span className="text-black-900 font-poppins text-left font-normal">
                            Rp
                          </span>
                          <span className="text-black-900 font-poppins text-left font-bold">
                            {" "}
                            84,000
                          </span>
                        </Text>
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                          size="txtInterRegular30"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-end justify-end p-[19px] rounded-[5px] w-full">
                    <div className="flex flex-col items-start justify-start mr-[5px] mt-0.5 w-[88%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsBold20"
                        >
                          Strawberry Pancake
                        </Text>
                        <Text
                          className="text-center text-gray-500 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          QTY
                        </Text>
                      </div>
                      <div className="flex flex-row font-inter items-start justify-between mt-0.5 w-[96%] md:w-full">
                        <Text
                          className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtInterBold25"
                        >
                          <span className="text-black-900 font-poppins text-left font-normal">
                            Rp
                          </span>
                          <span className="text-black-900 font-poppins text-left font-bold">
                            {" "}
                            28,000
                          </span>
                        </Text>
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                          size="txtInterRegular30"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 h-28 rounded-[5px] w-full"></div>
                <div className="bg-white-A700 flex flex-col items-end justify-end p-5 rounded-[5px] w-full">
                  <div className="flex flex-col items-center justify-start mr-[5px] w-[88%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsBold20"
                      >
                        Strawberry Pancake
                      </Text>
                      <Text
                        className="text-center text-gray-500 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        QTY
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-0.5 w-[98%] md:w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtPoppinsRegular25"
                      >
                        <span className="text-black-900 font-poppins text-left font-normal">
                          Rp{" "}
                        </span>
                        <span className="text-black-900 font-poppins text-left font-bold">
                          56.000
                        </span>
                      </Text>
                      <Text
                        className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                        size="txtInterRegular30"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-28 md:h-[111px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start ml-auto mr-[25px] my-auto w-4/5">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsBold20"
                      >
                        Strawberry Pancake
                      </Text>
                      <Text
                        className="text-center text-gray-500 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        QTY
                      </Text>
                    </div>
                    <div className="flex flex-row font-inter items-start justify-between mt-0.5 w-[97%] md:w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtInterBold25"
                      >
                        <span className="text-black-900 font-poppins text-left font-normal">
                          Rp
                        </span>
                        <span className="text-black-900 font-poppins text-left font-bold">
                          {" "}
                          28,000
                        </span>
                      </Text>
                      <Text
                        className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                        size="txtInterRegular30"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-end justify-center m-auto p-5 rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start mr-[5px] w-[88%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsBold20"
                        >
                          Strawberry Pancake
                        </Text>
                        <Text
                          className="text-center text-gray-500 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          QTY
                        </Text>
                      </div>
                      <div className="flex flex-row font-inter items-start justify-between mt-0.5 w-[97%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtInterBold25"
                        >
                          <span className="text-black-900 font-poppins text-left font-normal">
                            Rp
                          </span>
                          <span className="text-black-900 font-poppins text-left font-bold">
                            {" "}
                            28,000
                          </span>
                        </Text>
                        <Text
                          className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                          size="txtInterRegular30"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-[9px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col items-end justify-end p-5 rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start mr-[5px] w-[88%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsBold20"
                        >
                          Strawberry Pancake
                        </Text>
                        <Text
                          className="text-center text-gray-500 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          QTY
                        </Text>
                      </div>
                      <div className="flex flex-row font-inter items-start justify-between mt-0.5 w-[99%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtInterBold25"
                        >
                          <span className="text-black-900 font-poppins text-left font-normal">
                            Rp
                          </span>
                          <span className="text-black-900 font-poppins text-left font-bold">
                            {" "}
                            84,000
                          </span>
                        </Text>
                        <Text
                          className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                          size="txtInterRegular30"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-end justify-end p-5 rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start mr-[5px] w-[88%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsBold20"
                        >
                          Strawberry Pancake
                        </Text>
                        <Text
                          className="text-center text-gray-500 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          QTY
                        </Text>
                      </div>
                      <div className="flex flex-row font-inter items-start justify-between mt-0.5 w-[97%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtInterBold25"
                        >
                          <span className="text-black-900 font-poppins text-left font-normal">
                            Rp
                          </span>
                          <span className="text-black-900 font-poppins text-left font-bold">
                            {" "}
                            28,000
                          </span>
                        </Text>
                        <Text
                          className="mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                          size="txtInterRegular30"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[110px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]"
          >
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "6px",
                  paddingLeft: "34px",
                  color: "#adadad",
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: "15px",
                  [`&:hover, &.ps-active`]: { color: "#000000" },
                },
              }}
              className="flex flex-col items-center justify-start mb-[33px] mt-[158px] md:pr-10 sm:pr-5 pr-[52px] w-[53%]"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[34px] w-[34px]"
                      src="images/img_megaphone.svg"
                      alt="megaphone"
                    />
                  }
                ></MenuItem>
                <MenuItem>
                  <div className="flex flex-row items-center justify-end sm:pl-5">
                    <Text>MENU</Text>
                  </div>
                </MenuItem>
              </div>
              <div className="flex flex-col items-center justify-start mt-[78px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[34px] w-[34px]"
                      src="images/img_swmiconpack.svg"
                      alt="swmiconpack"
                    />
                  }
                ></MenuItem>
                <MenuItem>
                  <div className="flex flex-row items-center justify-end sm:pl-5">
                    <Text>SALES</Text>
                  </div>
                </MenuItem>
              </div>
              <div className="flex flex-col items-center justify-start mt-[455px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[34px] w-[34px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  }
                >
                  <Text>Log Out</Text>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
        </div>
        <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto p-2.5 top-[0] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-3 md:px-5 w-full">
            <Img
              className="h-[39px] md:h-auto object-cover rounded-[5px] w-[39px]"
              src="images/img_kaonicon1.png"
              alt="kaoniconOne"
            />
            <Text
              className="bg-gray-100 h-[58px] justify-center mb-0.5 md:ml-[0] ml-[55px] md:mt-0 mt-[15px] pb-1 pl-[30px] pr-[35px] pt-[11px] sm:px-5 rounded-[29px] sm:text-2xl md:text-[26px] text-[28px] text-black-900_4c w-[568px]"
              size="txtPoppinsRegular28"
            >
              Input QR Code Number
            </Text>
            <Button className="cursor-pointer font-bold font-manrope leading-[normal] mb-0.5 min-w-[252px] md:ml-[0] ml-[27px] md:mt-0 mt-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center">
              Generate
            </Button>
            <div className="flex flex-col font-poppins gap-[7px] items-end justify-start md:ml-[0] ml-[263px]">
              <Text
                className="text-[15px] text-black-900"
                size="txtPoppinsRegular15"
              >
                03 April 2023, 15:00PM
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right"
                size="txtPoppinsBold30"
              >
                Daily Order
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start p-[22px] md:px-5 right-[1%] rounded-[5px] w-[31%]">
          <div className="flex flex-row items-start justify-between my-1 w-full">
            <div className="flex flex-col items-start justify-start mt-[3px]">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                size="txtPoppinsBold25"
              >
                Total
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterRegular30"
              >
                <span className="text-black-900 font-inter text-left font-normal">
                  Rp{" "}
                </span>
                <span className="text-black-900 font-inter text-left font-bold">
                  224.000
                </span>
              </Text>
            </div>
            <div className="flex flex-col gap-1.5 items-center justify-start">
              <Text
                className="text-center text-gray-500 text-xl"
                size="txtPoppinsRegular20"
              >
                QTY
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterRegular30"
              >
                16
              </Text>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};
