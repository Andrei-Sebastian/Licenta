import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsImage from 'react-icons/bs';
import * as BiImage from 'react-icons/bi';

export const SidebarDataStylist = [
  {
    title: 'Home',
    path: '/welcome',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Appointments',
    path: '/appointments',
    icon: <FaIcons.FaCalendarAlt />
  },
  {
    title: 'Add post',
    path: '/addPost',
    icon: <BsImage.BsImage />,
  },
  {
    title: 'My posts',
    path: '/myPosts',
    icon: <BsImage.BsImages />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];

export const SidebarDataAdmin = [
  {
    title: 'Home',
    path: '/welcome',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];