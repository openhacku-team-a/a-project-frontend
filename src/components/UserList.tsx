"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import User from "./User";
import { UserData } from "../../proto/typescript/pb_out/main";
import users from "@/constants/json/user-data.json"; // テストデータ読み込み
import ReactPaginate from "react-paginate";

interface Props {
  setHoveredUser: Dispatch<SetStateAction<null | UserData>>;
  hoveredUser: null | UserData;
}

/**
 * UserList Component
 * ユーザー一覧
 */
const UserList = (props: Props) => {
  const { setHoveredUser, hoveredUser } = props;
  const [start, setStart] = useState(0); // 表示させる範囲の先頭インデックス
  const perPage = 4; // 表示させる要素の個数

  // ページ番号またはnext/previousが押下された時に発火する関数
  const pageChange = (data: { selected: number }) => {
    let pageNumber = data.selected;
    setStart(pageNumber * perPage);
  };

  return (
    <div className="w-full py-4 items-center">
      <div>
        {users.slice(start, start + perPage).map((user) => {
          return (
            <li key={user.userId} className="flex flex-row items-center">
              <div
                className="w-11/12"
                onMouseEnter={() => setHoveredUser(user)}
              >
                <User
                  user={user}
                  hovered={
                    hoveredUser ? hoveredUser.userId === user.userId : false
                  }
                />
              </div>
              {hoveredUser && hoveredUser.userId === user.userId ? (
                <div className="w-1/12">
                  <span className="material-symbols-outlined material-icons text-8xl text-blue-200 ">
                    arrow_right
                  </span>
                </div>
              ) : (
                <div></div>
              )}
            </li>
          );
        })}
      </div>
      <ReactPaginate
        // 総ページ数
        pageCount={Math.ceil(users.length / perPage)}
        // 先頭と末尾に表示させるページ数
        marginPagesDisplayed={2}
        // 今いるページの前後何ページを表示させるか
        pageRangeDisplayed={1}
        // ページ番号またはnext/previousを押下したときのイベント
        onPageChange={pageChange}
        // ページネーションの親要素のクラス名
        containerClassName={
          "justify-center items-center my-4 flex gap-x-5 gap-y-1.5"
        }
        // ページネーションのli要素のクラス名
        pageClassName={"inline-flex justify-center"}
        // ページネーションのa要素のクラス名
        pageLinkClassName={
          "justify-center inline-flex items-center text-base rounded h-8 w-8 hover:bg-gray-200"
        }
        // 「前へ」の表示
        previousLabel="<"
        // 「後へ」の表示
        nextLabel=">"
        // 「前へ」のli要素のクラス名
        previousClassName={"inline-flex justify-center"}
        // 「後へ」のli要素のクラス名
        nextClassName={"inline-flex justify-center"}
        // 「前へ」のa要素のクラス名
        previousLinkClassName="justify-center inline-flex items-center text-base rounded h-8 w-8 hover:bg-gray-200"
        // 「後へ」のa要素のクラス名
        nextLinkClassName="justify-center inline-flex items-center text-base rounded h-8 w-8 hover:bg-gray-200"
        // 使えないボタン（先頭にいる時の「前へ」など）のクラス名
        disabledClassName="text-gray-200 hover:bg-white"
        // ページがたくさんあるときに表示しない番号に当たる部分をどう表示するか
        breakLabel="..."
        // breakLabelのli要素のクラス名
        breakClassName={
          "inline-flex justify-center items-center h-10 w-10 text-base font-bold bg-white"
        }
        // breakLabelのa要素のクラス名
        breakLinkClassName={
          "inline-flex justify-center rounded-full align-middle text-black"
        }
        // 今いるページ番号のa要素のクラス名
        // hover:bg-whiteはpageLinkClassNameの「hover:bg-gray-200」を上書きしている
        activeLinkClassName={
          "text-blue-500 outline outline-2 outline-blue-500 rounded hover:bg-white"
        }
      />
    </div>
  );
};

export default UserList;
