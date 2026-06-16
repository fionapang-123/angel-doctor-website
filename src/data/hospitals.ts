export interface Hospital {
  name: string; nameEn: string; city: string; type: string; treatments: string[];
  doctorCount: number; highRated: number; avgRating: number; photo: string;
}

export const hospitals: Hospital[] = [
  {
    "name": "复旦大学附属儿科医院",
    "nameEn": "Children's Hospital of Fudan University",
    "city": "Shanghai",
    "type": "Children's hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 61,
    "highRated": 8,
    "avgRating": 3.94,
    "photo": "/images/hospitals/复旦大学附属儿科医院.png"
  },
  {
    "name": "复旦大学附属妇产科医院",
    "nameEn": "Obstetrics & Gynecology Hospital of Fudan University",
    "city": "Shanghai",
    "type": "Obstetrics & Gynecology hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 56,
    "highRated": 8,
    "avgRating": 4.01,
    "photo": "/images/hospitals/复旦大学附属妇产科医院.png"
  },
  {
    "name": "复旦大学附属华山医院",
    "nameEn": "Huashan Hospital, Fudan University",
    "city": "Shanghai",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 168,
    "highRated": 10,
    "avgRating": 3.88,
    "photo": "/images/hospitals/复旦大学附属华山医院.png"
  },
  {
    "name": "复旦大学附属中山医院",
    "nameEn": "Zhongshan Hospital, Fudan University",
    "city": "Shanghai",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 177,
    "highRated": 10,
    "avgRating": 3.83,
    "photo": "/images/hospitals/复旦大学附属中山医院.png"
  },
  {
    "name": "上海交通大学医学院附属第九人民医院",
    "nameEn": "Shanghai Ninth People's Hospital, SJTU School of Medicine",
    "city": "Shanghai",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 150,
    "highRated": 13,
    "avgRating": 3.98,
    "photo": "/images/hospitals/上海交通大学医学院附属第九人民医院.png"
  },
  {
    "name": "上海交通大学医学院附属仁济医院",
    "nameEn": "Renji Hospital, SJTU School of Medicine",
    "city": "Shanghai",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 150,
    "highRated": 15,
    "avgRating": 3.86,
    "photo": "/images/hospitals/上海交通大学医学院附属仁济医院.png"
  },
  {
    "name": "上海交通大学医学院附属瑞金医院",
    "nameEn": "Ruijin Hospital, SJTU School of Medicine",
    "city": "Shanghai",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 224,
    "highRated": 9,
    "avgRating": 3.78,
    "photo": "/images/hospitals/上海交通大学医学院附属瑞金医院.png"
  },
  {
    "name": "上海中医药大学附属龙华医院",
    "nameEn": "Longhua Hospital, Shanghai University of TCM",
    "city": "Shanghai",
    "type": "TCM hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 142,
    "highRated": 3,
    "avgRating": 3.46,
    "photo": "/images/hospitals/上海中医药大学附属龙华医院.png"
  },
  {
    "name": "上海中医药大学附属岳阳医院",
    "nameEn": "Yueyang Hospital, Shanghai University of TCM",
    "city": "Shanghai",
    "type": "TCM hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 137,
    "highRated": 0,
    "avgRating": 3.44,
    "photo": "/images/hospitals/上海中医药大学附属岳阳医院.png"
  },
  {
    "name": "北京朝阳医院",
    "nameEn": "Beijing Chaoyang Hospital",
    "city": "Beijing",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 221,
    "highRated": 7,
    "avgRating": 3.71,
    "photo": "/images/hospitals/北京朝阳医院.png"
  },
  {
    "name": "北京大学第三医院",
    "nameEn": "Peking University Third Hospital",
    "city": "Beijing",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 205,
    "highRated": 15,
    "avgRating": 3.81,
    "photo": "/images/hospitals/北京大学第三医院.png"
  },
  {
    "name": "北京大学深圳医院",
    "nameEn": "Peking University Shenzhen Hospital",
    "city": "Shenzhen",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 127,
    "highRated": 2,
    "avgRating": 3.53,
    "photo": "/images/hospitals/北京大学深圳医院.png"
  },
  {
    "name": "北京儿童医院",
    "nameEn": "Beijing Children's Hospital",
    "city": "Beijing",
    "type": "Children's hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 163,
    "highRated": 17,
    "avgRating": 3.87,
    "photo": "/images/hospitals/北京儿童医院.png"
  },
  {
    "name": "北京天坛医院",
    "nameEn": "Beijing Tiantan Hospital",
    "city": "Beijing",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 150,
    "highRated": 6,
    "avgRating": 3.72,
    "photo": "/images/hospitals/北京天坛医院.png"
  },
  {
    "name": "北京协和医院",
    "nameEn": "Peking Union Medical College Hospital",
    "city": "Beijing",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 325,
    "highRated": 11,
    "avgRating": 3.83,
    "photo": "/images/hospitals/北京协和医院.png"
  },
  {
    "name": "广东省妇幼保健院",
    "nameEn": "Guangdong Women and Children's Hospital",
    "city": "Guangzhou",
    "type": "Obstetrics & Gynecology hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 73,
    "highRated": 1,
    "avgRating": 3.6,
    "photo": "/images/hospitals/广东省妇幼保健院.png"
  },
  {
    "name": "广东省人民医院",
    "nameEn": "Guangdong Provincial People's Hospital",
    "city": "Guangzhou",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 184,
    "highRated": 5,
    "avgRating": 3.72,
    "photo": "/images/hospitals/广东省人民医院.png"
  },
  {
    "name": "广东省中医院",
    "nameEn": "Guangdong Provincial Hospital of Chinese Medicine",
    "city": "Guangzhou",
    "type": "TCM hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 141,
    "highRated": 2,
    "avgRating": 3.54,
    "photo": "/images/hospitals/广东省中医院.png"
  },
  {
    "name": "广州市第一人民医院",
    "nameEn": "Guangzhou First People's Hospital",
    "city": "Guangzhou",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 154,
    "highRated": 2,
    "avgRating": 3.5,
    "photo": "/images/hospitals/广州市第一人民医院.png"
  },
  {
    "name": "广州医科大学附属第一医院",
    "nameEn": "The First Affiliated Hospital of Guangzhou Medical University",
    "city": "Guangzhou",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 123,
    "highRated": 4,
    "avgRating": 3.64,
    "photo": "/images/hospitals/广州医科大学附属第一医院.png"
  },
  {
    "name": "广州医科大学附属妇女儿童医疗中心",
    "nameEn": "Guangzhou Medical University Women and Children's Medical Center",
    "city": "Guangzhou",
    "type": "Children's hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 148,
    "highRated": 8,
    "avgRating": 3.69,
    "photo": "/images/hospitals/广州医科大学附属妇女儿童医疗中心.png"
  },
  {
    "name": "广州中医药大学第一附属医院",
    "nameEn": "First Affiliated Hospital of Guangzhou University of Chinese Medicine",
    "city": "Guangzhou",
    "type": "TCM hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 160,
    "highRated": 1,
    "avgRating": 3.54,
    "photo": "/images/hospitals/广州中医药大学第一附属医院.png"
  },
  {
    "name": "暨南大学附属第一医院",
    "nameEn": "The First Affiliated Hospital of Jinan University",
    "city": "Guangzhou",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 103,
    "highRated": 1,
    "avgRating": 3.62,
    "photo": "/images/hospitals/暨南大学附属第一医院.png"
  },
  {
    "name": "南方医科大学南方医院",
    "nameEn": "Nanfang Hospital, Southern Medical University",
    "city": "Guangzhou",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 196,
    "highRated": 5,
    "avgRating": 3.7,
    "photo": "/images/hospitals/南方医科大学南方医院.png"
  },
  {
    "name": "南方医科大学珠江医院",
    "nameEn": "Zhujiang Hospital, Southern Medical University",
    "city": "Guangzhou",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 111,
    "highRated": 1,
    "avgRating": 3.62,
    "photo": "/images/hospitals/南方医科大学珠江医院.png"
  },
  {
    "name": "中山大学附属第三医院",
    "nameEn": "The Third Affiliated Hospital of Sun Yat-sen University",
    "city": "Guangzhou",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 7,
    "highRated": 1,
    "avgRating": 3.71,
    "photo": "/images/hospitals/中山大学附属第三医院.png"
  },
  {
    "name": "中山大学附属第五医院",
    "nameEn": "The Fifth Affiliated Hospital of Sun Yat-sen University",
    "city": "Guangzhou",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 48,
    "highRated": 0,
    "avgRating": 3.56,
    "photo": "/images/hospitals/中山大学附属第五医院.png"
  },
  {
    "name": "中山大学附属第一医院",
    "nameEn": "The First Affiliated Hospital of Sun Yat-sen University",
    "city": "Guangzhou",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 11,
    "highRated": 0,
    "avgRating": 3.56,
    "photo": "/images/hospitals/中山大学附属第一医院.png"
  },
  {
    "name": "中山大学附属口腔医院",
    "nameEn": "Hospital of Stomatology, Sun Yat-sen University",
    "city": "Guangzhou",
    "type": "Dental hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 29,
    "highRated": 0,
    "avgRating": 3.86,
    "photo": "/images/hospitals/中山大学附属口腔医院.png"
  },
  {
    "name": "中山大学中山眼科中心",
    "nameEn": "Zhongshan Ophthalmic Center, Sun Yat-sen University",
    "city": "Guangzhou",
    "type": "Eye hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 39,
    "highRated": 1,
    "avgRating": 3.75,
    "photo": "/images/hospitals/中山大学中山眼科中心.png"
  },
  {
    "name": "中山大学肿瘤防治中心",
    "nameEn": "Sun Yat-sen University Cancer Center",
    "city": "Guangzhou",
    "type": "Oncology hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 134,
    "highRated": 7,
    "avgRating": 3.89,
    "photo": "/images/hospitals/中山大学肿瘤防治中心.png"
  },
  {
    "name": "深圳市妇幼保健院",
    "nameEn": "Shenzhen Maternity & Child Healthcare Hospital",
    "city": "Shenzhen",
    "type": "Obstetrics & Gynecology hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 51,
    "highRated": 0,
    "avgRating": 3.49,
    "photo": "/images/hospitals/深圳市妇幼保健院.png"
  },
  {
    "name": "深圳市人民医院",
    "nameEn": "Shenzhen People's Hospital",
    "city": "Shenzhen",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 196,
    "highRated": 0,
    "avgRating": 3.52,
    "photo": "/images/hospitals/深圳市人民医院.png"
  },
  {
    "name": "香港大学深圳医院",
    "nameEn": "The University of Hong Kong-Shenzhen Hospital",
    "city": "Shenzhen",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 26,
    "highRated": 1,
    "avgRating": 3.58,
    "photo": "/images/hospitals/香港大学深圳医院.png"
  },
  {
    "name": "四川大学华西医院",
    "nameEn": "West China Hospital, Sichuan University",
    "city": "Chengdu",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 298,
    "highRated": 3,
    "avgRating": 3.8,
    "photo": "/images/hospitals/四川大学华西医院.png"
  },
  {
    "name": "四川省人民医院",
    "nameEn": "Sichuan Provincial People's Hospital",
    "city": "Chengdu",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 227,
    "highRated": 1,
    "avgRating": 3.54,
    "photo": "/images/hospitals/四川省人民医院.png"
  },
  {
    "name": "浙江大学医学院附属妇产科医院",
    "nameEn": "Women's Hospital, Zhejiang University School of Medicine",
    "city": "Hangzhou",
    "type": "Obstetrics & Gynecology hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 54,
    "highRated": 1,
    "avgRating": 3.74,
    "photo": "/images/hospitals/浙江大学医学院附属妇产科医院.png"
  },
  {
    "name": "浙江大学医学院附属邵逸夫医院",
    "nameEn": "Sir Run Run Shaw Hospital, Zhejiang University School of Medicine",
    "city": "Hangzhou",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 152,
    "highRated": 1,
    "avgRating": 3.61,
    "photo": "/images/hospitals/浙江大学医学院附属邵逸夫医院.png"
  },
  {
    "name": "重庆市人民医院",
    "nameEn": "Chongqing General Hospital",
    "city": "Chongqing",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 53,
    "highRated": 1,
    "avgRating": 3.52,
    "photo": "/images/hospitals/重庆市人民医院.png"
  },
  {
    "name": "重庆医科大学附属第二医院",
    "nameEn": "The Second Affiliated Hospital of Chongqing Medical University",
    "city": "Chongqing",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 175,
    "highRated": 2,
    "avgRating": 3.71,
    "photo": "/images/hospitals/重庆医科大学附属第二医院.png"
  },
  {
    "name": "重庆医科大学附属第一医院",
    "nameEn": "The First Affiliated Hospital of Chongqing Medical University",
    "city": "Chongqing",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 10,
    "highRated": 0,
    "avgRating": 3.38,
    "photo": "/images/hospitals/重庆医科大学附属第一医院.png"
  },
  {
    "name": "重庆医科大学附属儿童医院",
    "nameEn": "Children's Hospital of Chongqing Medical University",
    "city": "Chongqing",
    "type": "Children's hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 64,
    "highRated": 4,
    "avgRating": 3.76,
    "photo": "/images/hospitals/重庆医科大学附属儿童医院.png"
  },
  {
    "name": "珠海市人民医院",
    "nameEn": "Zhuhai People's Hospital",
    "city": "Zhuhai",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 48,
    "highRated": 0,
    "avgRating": 3.42,
    "photo": "/images/hospitals/珠海市人民医院.png"
  },
  {
    "name": "西安交通大学第一附属医院",
    "nameEn": "The First Affiliated Hospital of Xi'an Jiaotong University",
    "city": "Xi'an",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 183,
    "highRated": 0,
    "avgRating": 3.7,
    "photo": "/images/hospitals/西安交通大学第一附属医院.png"
  },
  {
    "name": "江苏省人民医院",
    "nameEn": "Jiangsu Provincial People's Hospital",
    "city": "Nanjing",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 331,
    "highRated": 10,
    "avgRating": 3.76,
    "photo": "/images/hospitals/江苏省人民医院.png"
  },
  {
    "name": "南京鼓楼医院",
    "nameEn": "Nanjing Drum Tower Hospital",
    "city": "Nanjing",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 182,
    "highRated": 5,
    "avgRating": 3.68,
    "photo": "/images/hospitals/南京鼓楼医院.png"
  },
  {
    "name": "华中科技大学同济医学院附属同济医院",
    "nameEn": "Tongji Hospital, Tongji Medical College, HUST",
    "city": "Wuhan",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 253,
    "highRated": 3,
    "avgRating": 3.77,
    "photo": "/images/hospitals/华中科技大学同济医学院附属同济医院.png"
  },
  {
    "name": "华中科技大学同济医学院附属协和医院",
    "nameEn": "Union Hospital, Tongji Medical College, HUST",
    "city": "Wuhan",
    "type": "Public tertiary hospital",
    "treatments": [
      "Specialist Consultation",
      "Second Opinion",
      "Health Checkup"
    ],
    "doctorCount": 258,
    "highRated": 9,
    "avgRating": 3.8,
    "photo": "/images/hospitals/华中科技大学同济医学院附属协和医院.png"
  }
];

export const shenzhenHospitals = hospitals.filter(h => h.city === 'Shenzhen');
export const guangzhouHospitals = hospitals.filter(h => h.city === 'Guangzhou');
export const shanghaiHospitals = hospitals.filter(h => h.city === 'Shanghai');
export const beijingHospitals = hospitals.filter(h => h.city === 'Beijing');
export const chengduHospitals = hospitals.filter(h => h.city === 'Chengdu');
export const chongqingHospitals = hospitals.filter(h => h.city === 'Chongqing');
export const hangzhouHospitals = hospitals.filter(h => h.city === 'Hangzhou');
export const nanjingHospitals = hospitals.filter(h => h.city === 'Nanjing');
export const wuhanHospitals = hospitals.filter(h => h.city === 'Wuhan');
export const xianHospitals = hospitals.filter(h => h.city === "Xi'an");
export const zhuhaiHospitals = hospitals.filter(h => h.city === 'Zhuhai');
export function getHospitalsByCity(city: string) { return hospitals.filter(h => h.city === city); }
