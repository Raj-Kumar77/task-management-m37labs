import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/tasks`, {
        headers: { Authorization: `${token}` },
      });

      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchTaskDetails = async (taskId) => {
    try {
      const response = await axios.get(`${backendUrl}/api/tasks/${taskId}`, {
        headers: { Authorization: `${token}` },
      });

      if (response.data.success) {
        setSelectedTask(response.data.data);
        setShowModal(true);
        setIsEditing(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeTask = async (taskId) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/tasks/${taskId}`, {
        headers: { Authorization: `${token}` },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
        closeModal();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateTask = async () => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/tasks/${selectedTask._id}`,
        editedTask,
        {
          headers: { Authorization: `${token}` },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
        setSelectedTask(response.data.data);
        setIsEditing(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTask(null);
    setIsEditing(false);
    setEditedTask(null);
  };

  useEffect(() => {
    fetchList();
  }, []);

   const filteredList = statusFilter === 'all'
    ? list
    : list.filter(item => item.status === statusFilter);

  return (
    <>
      <p className='mb-4 text-lg font-semibold'>All Tasks</p>

      {/* ✅ Filter Dropdown */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Card Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredList.map((item) => (
          <div
            key={item._id}
            onClick={() => fetchTaskDetails(item._id)}
            className='border border-gray-300 rounded-md p-4 cursor-pointer hover:shadow-md transition-shadow duration-200 bg-white'
          >
            <h3 className='text-md font-semibold'>{item.title}</h3>
            <p className='text-sm text-gray-600'>Status: {item.status}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
              onClick={closeModal}
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4">Task Details</h2>

            {isEditing ? (
              <>
                <div className="space-y-3">
                  <input
                    type="text"
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Title"
                    value={editedTask?.title || ''}
                    onChange={(e) =>
                      setEditedTask({ ...editedTask, title: e.target.value })
                    }
                  />
                  <textarea
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Description"
                    value={editedTask?.description || ''}
                    onChange={(e) =>
                      setEditedTask({ ...editedTask, description: e.target.value })
                    }
                  />
                  <select
                    className="w-full border px-3 py-2 rounded"
                    value={editedTask?.priority || ''}
                    onChange={(e) =>
                      setEditedTask({ ...editedTask, priority: e.target.value })
                    }
                  >
                    <option value="">Select Priority</option>
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                  </select>
                  <select
                    className="w-full border px-3 py-2 rounded"
                    value={editedTask?.status || ''}
                    onChange={(e) =>
                      setEditedTask({ ...editedTask, status: e.target.value })
                    }
                  >
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setEditedTask(null);
                    }}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={updateTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <p><strong>Title:</strong> {selectedTask.title}</p>
                <p><strong>Description:</strong> {selectedTask.description}</p>
                <p><strong>Priority:</strong> {selectedTask.priority}</p>
                <p><strong>Status:</strong> {selectedTask.status}</p>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setEditedTask({
                        title: selectedTask.title,
                        description: selectedTask.description,
                        priority: selectedTask.priority,
                        status: selectedTask.status,
                      });
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeTask(selectedTask._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default List;
