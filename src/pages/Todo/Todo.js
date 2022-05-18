import React from 'react';

const Todo = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">What is your name?</span>
                            
                        </label>
                        <input type="text" placeholder="todo" class="input input-bordered w-full max-w-xs" />
                        <label class="label">   
                        </label>
                        <label class="label">
                            <span class="label-text">Discription</span>
                            
                        </label>
                        <input type="text" placeholder="discription" class="input input-bordered w-full max-w-xs" />
                        <label class="label">   
                        </label>
                        <button class="btn btn-success">ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;