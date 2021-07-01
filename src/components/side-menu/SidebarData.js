import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsImage from 'react-icons/bs';
import * as BiImage from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'appointments',
        path: '#appointments',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Approve',
        path: '#revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ]
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
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Log out',
    path: '/login',
    icon: <BiImage.BiLogOut/>
  }
];
