import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Filter = () => {
  return (
    <div className='filter'>
      <h2 className="filter-title mb-4">Filter Products</h2>
      <Form>
        <Form.Check label='Ascending' name='group-1' type='radio' id={`inline-1`} />
        <Form.Check label='Descending' name='group-1' type='radio' id={`inline-2`} />
        <Button variant='primary' className='mt-4'>Clear Filter</Button>

      </Form>
    </div>
  )
}

export default Filter
