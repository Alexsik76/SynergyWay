import * as React from 'react'
import { useParams } from 'react-router-dom'
import UserUpdate from './UserUpdate'

export default function UpdateForm () {
  const { userId } = useParams()
  return (
        <UserUpdate userId={userId} />
  )
}