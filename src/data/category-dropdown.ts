import cate_icon_1 from '@/assets/images/icon/icon_63.svg';
import cate_icon_2 from '@/assets/images/icon/icon_64.svg';
import cate_icon_3 from '@/assets/images/icon/icon_65.svg';
import cate_icon_4 from '@/assets/images/icon/icon_68.svg';
import cate_icon_5 from '@/assets/images/icon/icon_66.svg';
import cate_icon_6 from '@/assets/images/icon/icon_67.svg';
import { category_dropdown } from '@/types/category-type';

const category_dropdown:category_dropdown[] = [
  {
    id:1,
    category_items:[
      {
        id:1,
        icon:cate_icon_1,
        title:'Painting',
        count:'25+',
        bg_clr:'#EAFBFD'
      },
      {
        id:2,
        icon:cate_icon_2,
        title:'Popcorn Removal',
        count:'15+',
        bg_clr:'#FFFAEC',
      },
      {
        id:3,
        icon:cate_icon_3,
        title:'Drywall',
        count:'30+',
        bg_clr:'#FFEBFB',
      },
      {
        id:7,
        icon:cate_icon_1,
        title:'Plumbing',
        count:'18+',
        bg_clr:'#E8F1FF',
      },
    ]
  },
  {
    id:2,
    category_items:[
      {
        id:4,
        icon:cate_icon_4,
        title:'Cabinet Install',
        count:'20+',
        bg_clr:'#E8F7E9',
      },
      {
        id:5,
        icon:cate_icon_5,
        title:'Home Repairs',
        count:'35+',
        bg_clr:'#F7F5FF',
      },
      {
        id:6,
        icon:cate_icon_6,
        title:'General Maintenance',
        count:'40+',
        bg_clr:'#FFF3EA',
      },
    ]
  }
]

export default category_dropdown;