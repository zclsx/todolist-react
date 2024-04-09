import clsx from 'clsx'
import { useState } from 'react'

import CheckBox from './CheckBox'

function Task({ name, done, onToggle, onTrash, onSave }) {
  const [editMode, setEditMode] = useState(false)
  return (
    <div className="m-2 flex items-center justify-between rounded-md bg-gray-100 p-3">
      <div className="flex items-center">
        <CheckBox
          checked={done}
          onClick={() => onToggle(!done)}
        />
        {!editMode ? (
          <p
            className={clsx('ml-2 text-center text-base', done ? 'line-through' : '')}
            onClick={() => setEditMode((prev) => !prev)}
          >
            {name}
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setEditMode(false)
            }}
          >
            <input
              type="text"
              value={name}
              className="ml-2 bg-gray-100"
              onChange={(e) => onSave(e.target.value)}
              onBlur={() => setEditMode(false)}
            />
          </form>
        )}
      </div>

      <div
        className="mr-4 size-3"
        onClick={onTrash}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
        </svg>
      </div>
    </div>
  )
}

export default Task
