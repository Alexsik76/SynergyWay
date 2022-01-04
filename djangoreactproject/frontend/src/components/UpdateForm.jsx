import * as React from 'react'
import { useParams } from 'react-router-dom'
import UserSimpleUpdate from './UserSimpleUpdate'

export default function UpdateForm () {
  const { userId } = useParams()
    console.log(userId)

  return (
        <UserSimpleUpdate userId={userId} />
  )
}