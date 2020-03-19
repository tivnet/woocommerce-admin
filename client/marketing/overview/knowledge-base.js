/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { IconButton, SelectControl } from '@wordpress/components';
import classNames from 'classnames';

import PlaceholderImage from './images/placeholder.png';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';
import { Gravatar } from '@woocommerce/components';
import { AnimationSlider } from '@woocommerce/components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class KnowledgeBase extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			pages: [ 44, 55, 66, 77, 88 ],
			page: 0,
			animate: null,
			posts: [],
		};
		this.forward = this.forward.bind( this );
		this.back = this.back.bind( this );
	}

	componentDidMount() {
		this.fetchPosts();
	}


	fetchPosts() {
		// todo pull from api
		const posts = [
			(
				<div className="woocommerce-marketing-knowledgebase-card__post">
					<img src={ PlaceholderImage } alt="" />
					<div>
						<h3>Leverage Email Marketing and Pop-ups to keep customers coming back.</h3>
						by Jason
					</div>
				</div>
			),
			(
				<div className="woocommerce-marketing-knowledgebase-card__post">
					<img src={ PlaceholderImage } alt="" />
					<div>
						<h3>Leverage Email Marketing and Pop-ups to keep customers coming back.</h3>
						by Jason
					</div>
				</div>
			),
			(
				<div className="woocommerce-marketing-knowledgebase-card__post">
					<img src={ PlaceholderImage } alt="" />
					<div>
						<h3>Leverage Email Marketing and Pop-ups to keep customers coming back.</h3>
						by Jason
					</div>
				</div>
			),
			(
				<div className="woocommerce-marketing-knowledgebase-card__post">
					<img src={ PlaceholderImage } alt="" />
					<div>
						<h3>Leverage Email Marketing and Pop-ups to keep customers coming back.</h3>
						by Jason
					</div>
				</div>
			),
			(
				<div className="woocommerce-marketing-knowledgebase-card__post">
					<img src={ PlaceholderImage } alt="" />
					<div>
						<h3>Leverage Email Marketing and Pop-ups to keep customers coming back.</h3>
						by Jason
					</div>
				</div>
			),
		];

		this.setState( { posts } );
	}


	forward() {
		this.setState( ( state ) => ( {
			page: state.page + 1,
			animate: 'left',
		} ) );
	}

	back() {
		this.setState( ( state ) => ( {
			page: state.page - 1,
			animate: 'right',
		} ) );
	}

	render() {
		const { page, animate, posts } = this.state;

		const previousLinkClass = classNames( 'woocommerce-pagination-arrows__link', {
			'is-active': page > 1,
		} );

		const nextLinkClass = classNames( 'woocommerce-pagination-arrows__link', {
			'is-active': page < this.pageCount,
		} );

		// group posts in to pages, each page has 2 posts
		const pages = [];

		let i;
		for ( i = 0; i < posts.length; i += 2 ) {
			pages.push( (
				<div className="woocommerce-marketing-knowledgebase-card__page">
					{ i }
					<div className="woocommerce-marketing-knowledgebase-card__post">
						<img src={ PlaceholderImage } alt="" />
						<div>
							<h3>Leverage Email Marketing and Pop-ups to keep customers coming back.</h3>
							by Jason
						</div>
					</div>
					<div className="woocommerce-marketing-knowledgebase-card__post">
						<img src={ PlaceholderImage } alt="" />
						<div>
							<h3>Leverage Email Marketing and Pop-ups to keep customers coming back.</h3>
							by Jason
						</div>
					</div>
				</div>
			) );
		}

		console.log(pages);

		return (
			<Card
				title={ __( 'WooCommerce knowledge base', 'woocommerce-admin' ) }
				description={ __( 'Learn the ins and outs of successful marketing from the experts at WooCommerce.', 'woocommerce-admin' ) }
				className="woocommerce-marketing-knowledgebase-card"
			>
				<div className="woocommerce-marketing-knowledgebase-slider">
					<TransitionGroup>
						<CSSTransition
							timeout={ 500 }
							key={ page }
							classNames="slide"
						>
							{ () => <div className="woocommerce-marketing-knowledgebase-slider__slide">{ pages[ page ] }</div> }
						</CSSTransition>
					</TransitionGroup>
				</div>

				<IconButton
					className={ previousLinkClass }
					disabled={ page === 0 }
					onClick={ this.back }
					icon="arrow-left-alt2"
					label={ __( 'Previous', 'woocommerce-admin' ) }
					size={ 18 }
				/>
				<IconButton
					className={ nextLinkClass }
					disabled={ page === pages.length - 1 }
					onClick={ this.forward }
					icon="arrow-right-alt2"
					label={ __( 'Next', 'woocommerce-admin' ) }
					size={ 18 }
				/>

			</Card>
		)
	}
}

export default KnowledgeBase;
