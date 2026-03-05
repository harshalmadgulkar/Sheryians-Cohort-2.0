import React from 'react';

const Feed = () => {
    return (
        <main className='feed-page flex justify-center items-start'>
            <div className="feed max-w-75 w-full">
                <div className="posts w-full">
                    <div className="post w-full flex flex-col gap-2 bg-[#312626] p-2">
                        <div className="user flex gap-2 items-center">
                            <div className="image-wrapper rounded-full flex justify-center items-center p-0.5 bg-conic from-red-400 via-green-300 to-white">
                                <img
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="user-profile"
                                    className='w-8 aspect-square rounded-full object-cover'
                                />
                            </div>
                            <p>Username</p>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="post-image"
                        />
                        <div className="bottom">
                            <p className="caption">
                                Caption Caption
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Feed;