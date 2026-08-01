import {useProductApi} from "../hooks/productsHooks"

const Filter = ({setRerender}) => {
    const { filterProducts } = useProductApi();
  return (
    <div className='border-gray-500 h-fit flex gap-5 p-2 items-center justify-center border rounded'>
        <div className='flex gap-5 w-full items-center justify-center'>
            <input className='outline-none px-2 py-2 border rounded flex-1' onChange={(e) => filterProducts(e.target.value)} type='text' placeholder='Search Products...'/>
            <button onClick={() => setRerender((prev) => !prev)} className=' p-1 px-2 rounded cursor-pointer hover:bg-gray-200 transition bg-white text-black'>Search</button>
        </div>
        <div className='flex gap-5 items-center justify-center'>
            <select className='outline-none px-2 py-2 border rounded bg-gray-800' name='category' id='category'>
                <option value='all'>All Categories</option> 
                <option value='electronics'>Electronics</option>
                <option value='jewelery'>Jewelery</option>
                <option value='men clothing'>Men's Clothing</option>
                <option value='women clothing'>Women's Clothing</option>
            </select>
            <button className=' p-1 px-2 rounded cursor-pointer hover:bg-gray-200 transition bg-white text-black'>Filter</button>
        </div>
    </div>
  )
}

export default Filter