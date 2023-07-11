import React from 'react'
import { FaSortAmountDownAlt } from 'react-icons/fa'
import useQueryParams from '../../hooks/useQueryParam'
import { useQuery } from '@tanstack/react-query'
import { isUndefined, omit, omitBy } from 'lodash'
import { createSearchParams, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import JobPost from '../../components/JobPost'
import { getAllPost } from '../../api/post.api'
import Searchbar2 from '../../components/Searchbar2'
export default function ListOfAvailableJobs() {
  const queryParams = useQueryParams()

  const queryConfig = omitBy(
    {
      querySearch: queryParams.querySearch,
      queryDate: queryParams.queryDate,
      salary: queryParams.salary,
      housemaid: queryParams.housemaid,
      sort: queryParams.sort
    },
    isUndefined
  )
  // console.log(queryConfig)
  const { data } = useQuery({
    queryKey: ['posts', queryConfig],
    queryFn: () => {
      return getAllPost(queryConfig)
    }
  })

  const posts = data?.data
  console.log(posts)

  const { housemaid = 'false', sort } = queryConfig
  const navigate = useNavigate()
  const isActiveMaid = (housemaidValue) => {
    return housemaid === housemaidValue
  }

  const handleRole = (housemaidValue) => {
    navigate({
      pathname: '/listofavailablejobs',
      search: createSearchParams({
        ...queryConfig,
        housemaid: housemaidValue
      }).toString()
    })
  }
  const handleSort = (sortValue) => {
    if (sort === 'asc') {
      const query = omit(queryConfig, 'sort')
      navigate({
        pathname: '/listofavailablejobs',
        search: createSearchParams({
          ...query
        }).toString()
      })
    } else {
      navigate({
        pathname: '/listofavailablejobs',
        search: createSearchParams({
          ...queryConfig,
          sort: sortValue
        }).toString()
      })
    }
  }

  const checkHousemaidFalse = () => {
    if (housemaid === 'false') {
      return `(${posts?.data?.length})`
    } else return ''
  }

  const checkHousemaidTrue = () => {
    if (housemaid === 'true') {
      return `(${posts?.data?.length})`
    } else return ''
  }
  return (
    <div className='w-full grid grid-cols-3 bg-[#DCEAFF]'>
      <div className='col-span-2 ml-16 mt-32'>
        <div className='grid grid-cols-9'>
          <button
            className={classNames('font-itim text-4xl col-span-4 py-5 rounded-full ', {
              'bg-[#7101ff] text-white': isActiveMaid('false'),
              'bg-white text-black ': !isActiveMaid('false')
            })}
            onClick={() => handleRole('false')}
          >
            Chăm trẻ {checkHousemaidFalse()}
          </button>
          <button
            className={classNames('font-itim text-4xl col-start-6 col-span-4 py-5 rounded-full ', {
              'bg-[#7101ff] text-white': isActiveMaid('true'),
              'bg-white text-black ': !isActiveMaid('true')
            })}
            onClick={() => handleRole('true')}
          >
            Nấu ăn {checkHousemaidTrue()}
          </button>
        </div>
        <div className='w-full mt-10 bg-[#ffffff] rounded-xl mb-96'>
          <div className='relative'>
            <FaSortAmountDownAlt className='absolute mt-16 ml-[5rem]' />
            <button
              onClick={() => handleSort('asc')}
              className='text-center hover:bg-slate-300 bg-[#D9D9D9] focus:outline-none rounded-full mt-12 ml-16 p-2.5 w-72 font-mono'
            >
              Lương&#32;&#8593;
            </button>
          </div>
          <div className='mt-12 max-h-[70rem] overflow-y-auto overflow-hidden'>
            {posts &&
              posts.data.map((post) => (
                <div key={post._id}>
                  <JobPost post={post} pathName={`${post._id}`} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='col-start-3 col-span-1 mx-20'>
        <Searchbar2 queryConfig={queryConfig}></Searchbar2>
      </div>
    </div>
  )
}
