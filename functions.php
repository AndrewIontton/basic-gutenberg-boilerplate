<?php
/**
 * Functions and definitions.
 *
 * @package luna
 */

namespace Luna\Functions;

// @codingStandardsIgnoreStart
// The theme version, is used for the ?ver parameter of scripts and styles.
define( 'THEME_VERSION', '1582905119' );
// @codingStandardsIgnoreEnd

/**
 * Custom functions for Gutenberg.
 */
require get_template_directory() . '/gutenberg.php';

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function setup() {

	// Make theme available for translation.
	load_theme_textdomain( 'luna', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	// Let WordPress manage the document title.
	add_theme_support( 'title-tag' );

	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support( 'post-thumbnails' );

	// Register nav menus.
	register_nav_menus(
		[
			'primary' => esc_html__( 'Primary Menu', 'luna' ),
		]
	);

	// Switch default core markup for search form, comment form, and comment to output valid HTML5.
	add_theme_support(
		'html5',
		[
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		]
	);


  /**
	 * Add Editor Scripts.
	 */
	add_theme_support( 'editor-styles' );
	add_editor_style( 'style-editor.css' );

	/**
	 * Add Custom Image Sizes.
	 */
	add_image_size( 'max-width', 2200, 2200 );
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\setup' );

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function scripts() {
	// Load theme's stylesheet.
	wp_enqueue_style( 'luna-style', get_template_directory_uri() . '/style.css', [], THEME_VERSION );
	wp_register_script( 'luna-script', get_template_directory_uri() . '/dist/build.js', [ 'jquery' ], THEME_VERSION, true );

	$data = [
		'home_url' => home_url(),
		'nonce'    => wp_create_nonce( 'wp_rest' ),
		'debug'    => defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG,
	];
	wp_localize_script( 'luna-script', 'luna', $data );
	wp_enqueue_script( 'luna-script' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\scripts' );
