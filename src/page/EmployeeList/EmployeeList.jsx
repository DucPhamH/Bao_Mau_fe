import React from 'react'
import { FaSortAmountDownAlt } from 'react-icons/fa'
import Employee from '../../components/Employee'
import useQueryParams from '../../hooks/useQueryParam'
import { getAllEmployee } from '../../api/employee.api'
import { useQuery } from '@tanstack/react-query'
import { isUndefined, omit, omitBy } from 'lodash'
import { createSearchParams, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import Searchbar from '../../components/Searchbar'
export default function EmployeeList() {
  const queryParams = useQueryParams()

  const queryConfig = omitBy(
    {
      querySearch: queryParams.querySearch,
      age: queryParams.age,
      salary: queryParams.salary,
      housemaid: queryParams.housemaid,
      sort: queryParams.sort
    },
    isUndefined
  )
  // console.log(queryConfig)
  const { data } = useQuery({
    queryKey: ['employees', queryConfig],
    queryFn: () => {
      return getAllEmployee(queryConfig)
    },
    keepPreviousData: true
  })

  const employees = data?.data
  //console.log(employees)

  const { housemaid = 'false', sort } = queryConfig
  const navigate = useNavigate()
  const isActiveMaid = (housemaidValue) => {
    return housemaid === housemaidValue
  }

  const handleRole = (housemaidValue) => {
    navigate({
      pathname: '/employeelist',
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
        pathname: '/employeelist',
        search: createSearchParams({
          ...query
        }).toString()
      })
    } else {
      navigate({
        pathname: '/employeelist',
        search: createSearchParams({
          ...queryConfig,
          sort: sortValue
        }).toString()
      })
    }
  }

  const checkHousemaidFalse = () => {
    if (housemaid === 'false') {
      return `(${employees?.data?.length})`
    } else return ''
  }

  const checkHousemaidTrue = () => {
    if (housemaid === 'true') {
      return `(${employees?.data?.length})`
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
            ベビーシッター {checkHousemaidFalse()}
          </button>
          <button
            className={classNames('font-itim text-4xl col-start-6 col-span-4 py-5 rounded-full ', {
              'bg-[#7101ff] text-white': isActiveMaid('true'),
              'bg-white text-black ': !isActiveMaid('true')
            })}
            onClick={() => handleRole('true')}
          >
            料理人 {checkHousemaidTrue()}
          </button>
        </div>
        <div className='w-full mt-10 bg-[#ffffff] rounded-xl mb-96'>
          <div className='relative'>
            <FaSortAmountDownAlt className='absolute mt-16 ml-[5rem]' />
            <button
              onClick={() => handleSort('asc')}
              className='text-center hover:bg-slate-300 bg-[#D9D9D9] focus:outline-none rounded-full mt-12 ml-16 p-2.5 w-72 font-mono'
            >
              給料&#32;&#8593;
            </button>
          </div>
          <div className='mt-12 h-[70rem] overflow-y-auto overflow-hidden'>
            {employees &&
              employees.data.map((employee) => (
                <div key={employee._id}>
                  <Employee employee={employee} pathName={`${employee._id}`} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='col-start-3 col-span-1 mx-20'>
        <Searchbar queryConfig={queryConfig}></Searchbar>
      </div>
    </div>
  )
}
