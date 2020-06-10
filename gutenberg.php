<?php
/**
 * Gutenberg Themeing options and function.
 *
 * @package luna
 */

namespace Luna\Gutenberg;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Gutenberg scripts and styles.
 */
function gutenberg_scripts() {

	wp_enqueue_script(
		'block-scripts',
		get_template_directory_uri() . '/dist/blocks.js',
		[ 'wp-blocks', 'wp-dom', 'editor-scripts' ],
		filemtime( get_stylesheet_directory() . '/dist/blocks.js' ),
		true
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\gutenberg_scripts' );