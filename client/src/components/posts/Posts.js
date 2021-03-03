import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';

const Posts = ({ getPosts, post: { posts, loading } }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);
	return loading ? (
		<Spinner />
	) : (
		<>
			<h1 className='large text-prymary'>Posts</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Welcome to the community
			</p>
			{/* PostForm */}
			<div className='posts'>
				{posts.map(post => (
					<PostItem key={post._id} post={post} />
				))}
			</div>
		</>
	);
};

Posts.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);