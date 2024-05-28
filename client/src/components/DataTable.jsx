import React from 'react'
import { Settings } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { Dot } from 'lucide-react';
export default function DataTable() {
    return (
        <>
            <div className='flex justify-center max-w-4xl mx-auto overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr className='text-gray-500 border-b'>
                            <th className='px-5 py-2'>#</th>
                            <th className='px-5 py-2'>Name</th>
                            <th className='px-5 py-2'>Date Created</th>
                            <th className='px-5 py-2'>Role</th>
                            <th className='px-5 py-2'>Status</th>
                            <th className='px-5 py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b text-center'>
                            <td className='px-5 py-2 text-gray-500'>1</td>
                            <td className='px-5 py-2 font-semibold text-gray-800'>
                                <div className='flex flex-row justify-start items-center'>
                                    <img src="./img/person1.png" className='w-8' />
                                    <span className='ml-2'>Tejasvi Kumar</span>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>10/09/2023</td>
                            <td className='px-5 py-2 text-gray-500'>Admin</td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row items-center justify-center'>
                                    {/* */}
                                    <Dot size={40} color="#37ff00" />
                                    <div>Active</div>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row justify-around items-center'>
                                    <div><Settings size={20} color="#0062ff" /></div>
                                    <div><CircleX size={20} color="#ff0000" /></div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b text-center'>
                            <td className='px-5 py-2 text-gray-500'>2</td>
                            <td className='px-5 py-2 font-semibold text-gray-800'>
                                <div className='flex flex-row justify-start items-center'>
                                    <img src="./img/person2.png" className='w-8' />
                                    <span className='ml-2'>Meghna Reddy</span>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>20/10/2024</td>
                            <td className='px-5 py-2 text-gray-500'>Creator</td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row items-center justify-center'>
                                    <Dot size={40} color="#ff0000" />
                                    <div>Suspended</div>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row justify-around items-center'>
                                    <div><Settings size={20} color="#0062ff" /></div>
                                    <div><CircleX size={20} color="#ff0000" /></div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b text-center'>
                            <td className='px-5 py-2 text-gray-500'>3</td>
                            <td className='px-5 py-2 font-semibold text-gray-800'>
                                <div className='flex flex-row justify-start items-center'>
                                    <img src="./img/person3.png" className='w-8' />
                                    <span className='ml-2'>Arjun Kumar</span>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>07/02/2024</td>
                            <td className='px-5 py-2 text-gray-500'>Publisher</td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row items-center justify-center'>
                                    <Dot size={40} color="#37ff00" />
                                    <div>Active</div>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row justify-around items-center'>
                                    <div><Settings size={20} color="#0062ff" /></div>
                                    <div><CircleX size={20} color="#ff0000" /></div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b text-center'>
                            <td className='px-5 py-2 text-gray-500'>4</td>
                            <td className='px-5 py-2 font-semibold text-gray-800'>
                                <div className='flex flex-row justify-start items-center'>
                                    <img src="./img/person4.png" className='w-8' />
                                    <span className='ml-2'>Shilpi Kumari</span>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>20/10/2024</td>
                            <td className='px-5 py-2 text-gray-500'>Reviewer</td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row items-center justify-center'>
                                    <Dot size={40} color="#37ff00" />
                                    <div>Active</div>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row justify-around items-center'>
                                    <div><Settings size={20} color="#0062ff" /></div>
                                    <div><CircleX size={20} color="#ff0000" /></div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b text-center'>
                            <td className='px-5 py-2 text-gray-500'>5</td>
                            <td className='px-5 py-2 font-semibold text-gray-800'>
                                <div className='flex flex-row justify-start items-center'>
                                    <img src="./img/person5.png" className='w-8' />
                                    <span className='ml-2'>Kaushiki</span>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>20/10/2024</td>
                            <td className='px-5 py-2 text-gray-500'>Moderator</td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row items-center justify-center'>
                                    <Dot size={40} color="#ff6600" />
                                    <div>Inactive</div>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row justify-around items-center'>
                                    <div><Settings size={20} color="#0062ff" /></div>
                                    <div><CircleX size={20} color="#ff0000" /></div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b text-center'>
                            <td className='px-5 py-2 text-gray-500'>6</td>
                            <td className='px-5 py-2 font-semibold text-gray-800'>
                                <div className='flex flex-row justify-start items-center'>
                                    <img src="./img/person6.png" className='w-8' />
                                    <span className='ml-2'>Ayush Saini</span>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>20/10/2024</td>
                            <td className='px-5 py-2 text-gray-500'>Publisher</td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row items-center justify-center'>
                                    <Dot size={40} color="#37ff00" />
                                    <div>Active</div>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row justify-around items-center'>
                                    <div><Settings size={20} color="#0062ff" /></div>
                                    <div><CircleX size={20} color="#ff0000" /></div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b text-center'>
                            <td className='px-5 py-2 text-gray-500'>7</td>
                            <td className='px-5 py-2 font-semibold text-gray-800'>
                                <div className='flex flex-row justify-start items-center'>
                                    <img src="./img/person7.png" className='w-8' />
                                    <span className='ml-2'>Rahul Kumar</span>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>20/10/2024</td>
                            <td className='px-5 py-2 text-gray-500'>Editor</td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row items-center justify-center'>
                                    <Dot size={40} color="#37ff00" />
                                    <div>Active</div>
                                </div>
                            </td>
                            <td className='px-5 py-2 text-gray-500'>
                                <div className='flex flex-row justify-around items-center'>
                                    <div><Settings size={20} color="#0062ff" /></div>
                                    <div><CircleX size={20} color="#ff0000" /></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}