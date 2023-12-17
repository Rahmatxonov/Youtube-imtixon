import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { IoIosStopwatch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { MdFeedback } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Subscriptions", icon: <MdSubscriptions />, type: "category" },
  { name: "Library", icon: <FaRegFolder />, type: "category" },
  { name: "History", icon: <MdLiveTv />, type: "category" },
  { name: "Watch later", icon: <FaRegFile />, type: "category" },
  { name: "Favourites", icon: <IoIosStopwatch />, type: "category" },
  { name: "Liked videos", icon: <FaRegHeart />, type: "category" },
  { name: "Music", icon: <IoMusicalNotesOutline />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <MdFeedback />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <CgMenuGridO />, type: "menu" },
];
