<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$s_M QsQXgLwXkinN}~pZkpGnh~M[1(d@Imo#_]c_k^o7}f{uSKv%S3xI3cR}~g`' );
define( 'SECURE_AUTH_KEY',  'Fi*}-OP1XBZGi}b:B]]?6f<gwv-bdhTF5#ztNQ-NO:Bg,<cZq0QG&TW1Pc)w~x@(' );
define( 'LOGGED_IN_KEY',    '7INX{CFkm@{v7?qtZu8p4BFf/`of-z)l6ZpZ.{s0]j~D #B8&<1FR#U!(x=3V156' );
define( 'NONCE_KEY',        '1az  ~K 5{5nn1 #*$5g6~~;5%jrOQm!+Jy?A+XgP9C3=nu7jr2Tc0<N:qq[G4$#' );
define( 'AUTH_SALT',        'J!RxrQ/WOp>XJSu:~= (l_l67]d>)*MgZm8q_3ok4=f`4=~01?>0lE1hKe. 4:&]' );
define( 'SECURE_AUTH_SALT', 'x)KqDw|7+rW3R^J*8qb+sF~7p!9^3SDm}J^_s/RbK^4QXp=4]Vq,Ad,:r5/-9:-_' );
define( 'LOGGED_IN_SALT',   'J!~<rEBF*UdY6oN^m3]f(V>pGK?pQ[9,DYj })Ug|R,Vt;YGXBx~|rw@4qwP*85%' );
define( 'NONCE_SALT',       'b`vEvObZD5uB3bTG.=2:O3M+nQa4?8B}H53W?kxSrn2Q$s+gc=/]B:-o#YBoCyF6' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

define( 'FS_METHOD', 'direct' );


