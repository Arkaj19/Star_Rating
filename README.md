# ⭐ Star Rating Component

A customizable, interactive star rating component built with React that provides hover preview functionality and click-to-select rating.

## ✨ Features

- **Interactive Rating**: Click on stars to set a rating
- **Hover Preview**: Hover over stars to preview rating before selecting
- **Customizable**: Configure the number of stars (default: 5)
- **Responsive**: Works seamlessly across different screen sizes
- **Lightweight**: No external dependencies (except React)

## 🚀 Installation

```bash
# Copy the StarRating component into your React project
# Make sure you have React installed:
npm install react
```

## 📖 Usage

### Basic Usage

```jsx
import { StarRating } from './path-to-your-component/StarRating';

function App() {
  return (
    <div>
      <h2>Rate this product:</h2>
      <StarRating />
    </div>
  );
}
```

### Custom Number of Stars

```jsx
<StarRating stars={10} />  {/* 10-star rating system */}
<StarRating stars={3} />   {/* 3-star rating system */}
```

## 🎯 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `stars` | `number` | `5` | Number of stars to display |

## 🎨 Styling

The component uses a `gold` CSS class for selected/hovered stars. Make sure to define this class in your CSS:

```css
.gold {
  color: gold;
}

/* Optional: Add transition for smooth hover effect */
span {
  transition: color 0.2s ease;
  cursor: pointer;
}
```

## 🔧 How It Works

The component uses two main state variables:

- **`star`**: Stores the currently selected rating
- **`hoverVal`**: Stores the current hover position for preview

### Logic Breakdown

```javascript
index < hoverVal || (index < star && hoverVal == 0)
```

- **When hovering**: Shows stars up to hover position (`index < hoverVal`)
- **When not hovering**: Shows stars up to selected rating (`index < star && hoverVal == 0`)
- The `hoverVal == 0` condition ensures selection logic only applies when not hovering

## 🎮 User Interactions

1. **Hover**: Move mouse over stars to preview rating
2. **Click**: Click on a star to set that rating
3. **Mouse Leave**: Hover preview disappears, showing selected rating

## 📱 Example Implementation

```jsx
import { useState } from "react";

export const StarRating = ({ stars = 5 }) => {
  const [star, setStars] = useState(0);
  const [hoverVal, setHoverVal] = useState(0);
  
  return (
    <div>
      {new Array(stars).fill(0).map((value, index) => {
        return (
          <span
            className={
              index < hoverVal || (index < star && hoverVal == 0) ? "gold" : ""
            }
            key={index}
            onClick={() => setStars(index + 1)}
            onMouseEnter={() => setHoverVal(index + 1)}
            onMouseLeave={() => setHoverVal(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};
```

## 🎨 Customization Ideas

- Add half-star ratings
- Include rating labels (Poor, Good, Excellent)
- Add animation effects
- Support for read-only mode
- Custom star icons
- Different color schemes

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This component is open source and available under the [MIT License](LICENSE).

---

⭐ **Happy Rating!** ⭐
