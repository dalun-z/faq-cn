import { VideoCameraIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Doc.css';

const features = [
  {
    name: 'POSTRON 网页后台管理(back-office)常见问题及功能讲解',
    description:
      '内容包含了如何登陆后台，如何更改菜单设置，如何更改收银员登录PIN，以及如何查看报表等等...',
    icon: MagnifyingGlassIcon,
    url: '/FAQ_PAGE/web-faq-page',
  },
  {
    name: 'POSTRON 网页后台管理(back-office)讲解视频',
    description:
      '後臺管理視頻講解',
    icon: VideoCameraIcon,
    url: 'https://www.youtube.com/@alliancebankcardservices7713',
  },
  {
    name: 'POS 点餐机常见问题解答',
    description:
      '内容包含了每个按键以及功能的详细讲解，如何安装及使用，如何下订单取消订单，如何选择支付方式等等...',
    icon: MagnifyingGlassIcon,
    url: '/FAQ_PAGE/pos-faq-page',
  },
  {
    name: 'POS 点餐机讲解视频',
    description:
      'POS機视频讲解',
    icon: VideoCameraIcon,
    url: '',
  },
]

export default function Home() {
  return (
    <div className="py-24 sm:py-32 home-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center header-bg-img">
          <img alt='' href="/" className='rotate-img' src={require('../images/Postron_Rotate_Logo.png')} width='100' height='100' style={{ marginRight: '1000px' }} />
          <h2 className="text-base font-semibold leading-7 text-indigo-600">ALLIANCE BANKCARD SERVICES / POSTRON 技术支持</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            解决您在使用POSTRON途中的一切疑惑!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            请通过以下方式联系技术部门如果您还有别的问题
            <br></br>
            拨打 <a href="/" className="text-indigo-600 hl-text">1 (800) 503-6222</a> 或发邮件至 <a href="/" className="text-indigo-600 hl-text">support@postron.com</a>
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={feature.name} className="relative pl-16 link-to-page hl-text">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div key={index}>
                    <Link to={feature.url}>
                      <span className="header-title">{feature.name}</span>
                    </Link>
                  </div>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}