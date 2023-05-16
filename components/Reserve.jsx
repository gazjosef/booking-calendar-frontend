import { useState } from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import useFetch from '../hooks/useFetch'

export const Reserve = ({ setOpen }) => {
  const [selectedRooms, setSelectedRooms] = useState([])

  const { data, loading, error } = useFetch(`hotels/room/${hotelId}`)

  const handleSelect = (e) => {}

  return (
    <div className="reserve">
      <div className="container">
        <FaTimesCircle onClick={() => setOpen(false)} />
        <span>Select your rooms:</span>
        {data.map((item) => {
          ;<div className="item">
            <div className="item__info">
              <div className="item__title">{item.title}</div>
              <div className="item__desc">{item.desc}</div>
              <div className="item__max">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="item__price">{item.price}</div>
            </div>
            {item.roomNumbers.map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input type="select" value={roomNumber._id} />
              </div>
            ))}
          </div>
        })}
      </div>
    </div>
  )
}
