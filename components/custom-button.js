// components/CustomButton.js
import React from 'react';
import PropTypes from 'prop-types';

// Button Component
const CustomButton = ({
    children,
    variant = 'solid',  // default to 'solid'
    colorStyle = 'primary',  // default to 'primary'
    leftIcon,
    rightIcon,
    onClick,
    style,
    ...rest
}) => {
    // Define styles for different variants and colors
    const styles = {
        button: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            border: 'none',
            fontSize: '16px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            outline: 'none',
            fontFamily: '"Ubuntu Sans", sans-serif', // Applying Ubuntu Sans font
            margin: '8px', // Added margin for spacing between buttons
            ...(variant === 'solid' && solidStyles[colorStyle]),
            ...(variant === 'outline' && outlineStyles[colorStyle]),
            ...(variant === 'ghost' && ghostStyles[colorStyle]), // Adding ghost style
            ...style, // Allow for additional custom styles
        },
        icon: {
            marginRight: leftIcon ? '8px' : '0',
            marginLeft: rightIcon ? '8px' : '0',
        },
    };

    return (
        <button onClick={onClick} style={styles.button} {...rest}>
            {leftIcon && <span style={styles.icon}>{leftIcon}</span>}
            {children}
            {rightIcon && <span style={styles.icon}>{rightIcon}</span>}
        </button>
    );
};

// Solid button styles for different colors
const solidStyles = {
    primary: {
        backgroundColor: '#164863',  // Dark Blue
        color: '#fff',
    },
    secondary: {
        backgroundColor: '#427D9D',  // Medium Blue
        color: '#fff',
    },
    light: {
        backgroundColor: '#9BBEC8',  // Light Blue
        color: '#fff',
    },
    veryLight: {
        backgroundColor: '#DDF2FD',  // Very Light Blue
        color: '#164863',  // Dark Blue text for contrast
    },
};

// Outline button styles for different colors
const outlineStyles = {
    primary: {
        border: '2px solid #164863',  // Dark Blue border
        color: '#164863',  // Dark Blue text
        backgroundColor: 'transparent',
    },
    secondary: {
        border: '2px solid #427D9D',  // Medium Blue border
        color: '#427D9D',  // Medium Blue text
        backgroundColor: 'transparent',
    },
    light: {
        border: '2px solid #9BBEC8',  // Light Blue border
        color: '#9BBEC8',  // Light Blue text
        backgroundColor: 'transparent',
    },
    veryLight: {
        border: '2px solid #DDF2FD',  // Very Light Blue border
        color: '#164863',  // Dark Blue text
        backgroundColor: 'transparent',
    },
};

// Ghost button styles for different colors
const ghostStyles = {
    primary: {
        backgroundColor: 'transparent',
        color: '#164863',  // Dark Blue text
        border: '2px solid transparent',
        hover: {
            border: '2px solid #164863',  // Dark Blue border on hover
            color: '#164863',  // Dark Blue text on hover
        },
    },
    secondary: {
        backgroundColor: 'transparent',
        color: '#427D9D',  // Medium Blue text
        border: '2px solid transparent',
        hover: {
            border: '2px solid #427D9D',  // Medium Blue border on hover
            color: '#427D9D',  // Medium Blue text on hover
        },
    },
    light: {
        backgroundColor: 'transparent',
        color: '#9BBEC8',  // Light Blue text
        border: '2px solid transparent',
        hover: {
            border: '2px solid #9BBEC8',  // Light Blue border on hover
            color: '#9BBEC8',  // Light Blue text on hover
        },
    },
    veryLight: {
        backgroundColor: 'transparent',
        color: '#164863',  // Dark Blue text
        border: '2px solid transparent',
        hover: {
            border: '2px solid #164863',  // Dark Blue border on hover
            color: '#164863',  // Dark Blue text on hover
        },
    },
};
// Prop types to enforce expected props for the button component
CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['solid', 'outline', 'ghost']),
    colorStyle: PropTypes.oneOf(['primary', 'secondary', 'light', 'veryLight']),
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default CustomButton;
