import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import React from 'react';
import { Link } from 'react-router-dom';


const features = [
  {
    name: 'POSTRON 点餐机常见问题解答',
    description:
      'Included the questions about basic description of the POSTRON machine and introduction of each feature',
    icon: CloudArrowUpIcon,
    url: '/pos-faq-page',
  },
  {
    name: 'POSTRON machine tutorial',
    description:
      'Tutorial with step-by-step video to introduce the features.',
    icon: LockClosedIcon,
    url: '',
  },
  {
    name: 'POSTRON back office FAQ',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
    url: '',
  },
  {
    name: 'POSTRON back office tutorial',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
    url: 'https://www.youtube.com/@postronPOSsystem',
  },
]

export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">ALLIANCE BANKCARD SERVICES / POSTRON 技术支持</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            解决您在使用POSTRON途中的一切疑惑!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            请通过以下方式联系技术部门如果您还有别的问题
            <br></br>
            拨打 <a href="" className="text-indigo-600">(800) 503-6222</a> 或发邮件至 <a href="" className="text-indigo-600">support@postron.com</a>
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div key={index}>
                    <Link to={feature.url}>
                      <span className="text-green-400">{feature.name}</span>
                    </Link>
                    <a href={feature.url} className="text-green-400">{feature.name}</a>
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