import { notFound } from 'next/navigation';
import BlogPost from './BlogPost';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Complete blog posts data with full content
const blogPosts = [
  {
    id: 'web3-development-guide',
    title: 'The Complete Guide to Web3 Development in 2024',
    excerpt: 'Explore the latest trends, tools, and best practices for building decentralized applications in the rapidly evolving Web3 ecosystem.',
    content: `
# Introduction to Web3 Development

The Web3 ecosystem has evolved dramatically in 2024, bringing new opportunities and challenges for developers. This comprehensive guide will walk you through everything you need to know to start building decentralized applications.

## What is Web3?

Web3 represents the third generation of the internet, built on blockchain technology and decentralized protocols. Unlike Web2, which is dominated by centralized platforms, Web3 gives users control over their data and digital assets.

## Core Technologies

### 1. Blockchain Platforms

**Ethereum**: Still the dominant platform for smart contracts and DeFi applications.
- **Pros**: Large developer community, extensive tooling, established ecosystem
- **Cons**: High gas fees, network congestion

**Polygon**: Layer 2 scaling solution for Ethereum.
- **Pros**: Low fees, fast transactions, Ethereum compatibility
- **Cons**: Less decentralized than Ethereum mainnet

**Solana**: High-performance blockchain with low fees.
- **Pros**: Fast transactions, low costs, growing ecosystem
- **Cons**: Network stability issues, smaller developer community

### 2. Development Tools

**Hardhat**: The most popular Ethereum development framework.
\`\`\`javascript
// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    polygon: {
      url: "https://polygon-rpc.com/",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
\`\`\`

**Web3.js & Ethers.js**: Libraries for interacting with Ethereum.
\`\`\`javascript
// Using ethers.js
import { ethers } from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(address, abi, signer);
\`\`\`

## Smart Contract Development

### Best Practices

1. **Security First**: Always audit your contracts and use established patterns
2. **Gas Optimization**: Write efficient code to minimize transaction costs
3. **Modularity**: Break complex contracts into smaller, reusable components

### Example: Simple Token Contract

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
\`\`\`

## Frontend Integration

### Connecting to Wallets

\`\`\`typescript
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export const useWallet = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setAccount(accounts[0]);
        setProvider(provider);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    }
  };

  return { account, provider, connectWallet };
};
\`\`\`

## Testing and Deployment

### Writing Tests

\`\`\`javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  it("Should mint tokens to owner", async function () {
    const [owner] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy(1000);
    
    expect(await token.balanceOf(owner.address)).to.equal(1000);
  });
});
\`\`\`

### Deployment Script

\`\`\`javascript
async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(ethers.utils.parseEther("1000000"));
  
  await token.deployed();
  console.log("Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
\`\`\`

## Conclusion

Web3 development in 2024 offers exciting opportunities for creating decentralized applications that give users true ownership and control. By mastering these core technologies and following best practices, you'll be well-equipped to build the next generation of internet applications.

Remember to stay updated with the rapidly evolving ecosystem, participate in the community, and always prioritize security in your development process.
`,
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Web3', 'Blockchain', 'DeFi', 'Smart Contracts'],
    featured: true,
    author: 'Adrian Glazer'
  },
  {
    id: 'react-performance-optimization',
    title: 'Advanced React Performance Optimization Techniques',
    excerpt: 'Learn how to optimize your React applications for better performance with advanced techniques like memoization, code splitting, and lazy loading.',
    content: `
# Advanced React Performance Optimization

Performance is crucial for user experience and SEO. This guide covers advanced techniques to optimize your React applications for better performance and faster loading times.

## Understanding React Performance

React's virtual DOM and reconciliation algorithm are generally efficient, but as applications grow complex, performance issues can arise. Common bottlenecks include:

- Unnecessary re-renders
- Large bundle sizes
- Inefficient state management
- Heavy computations blocking the main thread

## Memoization Techniques

### React.memo for Component Memoization

\`\`\`jsx
import React from 'react';

const ExpensiveComponent = React.memo(({ data, onAction }) => {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      <h3>{data.title}</h3>
      <button onClick={onAction}>Action</button>
    </div>
  );
});

// Optimize with custom comparison
const OptimizedComponent = React.memo(
  ({ data, onAction }) => {
    // Component logic
  },
  (prevProps, nextProps) => {
    return prevProps.data.id === nextProps.data.id;
  }
);
\`\`\`

### useMemo for Expensive Calculations

\`\`\`jsx
import { useMemo, useState } from 'react';

const DataAnalytics = ({ data }) => {
  const [filter, setFilter] = useState('');
  
  const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation...');
    return data
      .filter(item => item.name.includes(filter))
      .reduce((acc, item) => acc + item.value, 0);
  }, [data, filter]);
  
  return (
    <div>
      <input 
        value={filter} 
        onChange={e => setFilter(e.target.value)} 
        placeholder="Filter items..."
      />
      <p>Total: {expensiveCalculation}</p>
    </div>
  );
};
\`\`\`

### useCallback for Function Memoization

\`\`\`jsx
import { useCallback, useState } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  
  // Without useCallback, this function is recreated on every render
  const handleItemAction = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);
  
  const incrementCount = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  return (
    <div>
      <button onClick={incrementCount}>Count: {count}</button>
      <ItemList items={items} onAction={handleItemAction} />
    </div>
  );
};
\`\`\`

## Code Splitting and Lazy Loading

### Dynamic Imports with React.lazy

\`\`\`jsx
import { lazy, Suspense } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));
const Analytics = lazy(() => import('./Analytics'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
\`\`\`

### Component-Level Code Splitting

\`\`\`jsx
import { useState, lazy, Suspense } from 'react';

const HeavyChart = lazy(() => import('./HeavyChart'));

const Dashboard = () => {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setShowChart(true)}>
        Show Chart
      </button>
      
      {showChart && (
        <Suspense fallback={<div>Loading chart...</div>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
};
\`\`\`

## Virtualization for Large Lists

\`\`\`jsx
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      <div className="list-item">
        {items[index].name}
      </div>
    </div>
  );
  
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </List>
  );
};
\`\`\`

## Optimizing Context Usage

### Split Contexts for Better Performance

\`\`\`jsx
// Instead of one large context
const AppContext = createContext();

// Split into focused contexts
const AuthContext = createContext();
const ThemeContext = createContext();
const UserDataContext = createContext();

const App = () => {
  return (
    <AuthContext.Provider value={authValue}>
      <ThemeContext.Provider value={themeValue}>
        <UserDataContext.Provider value={userValue}>
          <AppContent />
        </UserDataContext.Provider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};
\`\`\`

### Memoize Context Values

\`\`\`jsx
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const value = useMemo(() => ({
    user,
    loading,
    login: (credentials) => {
      // Login logic
    },
    logout: () => {
      setUser(null);
    }
  }), [user, loading]);
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
\`\`\`

## Bundle Analysis and Optimization

### Analyze Bundle Size

\`\`\`bash
# Install bundle analyzer
npm install --save-dev webpack-bundle-analyzer

# Add to package.json scripts
"analyze": "npm run build && npx webpack-bundle-analyzer build/static/js/*.js"
\`\`\`

### Tree Shaking and Import Optimization

\`\`\`jsx
// Bad: Imports entire library
import _ from 'lodash';

// Good: Import only what you need
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';

// Or use ES6 imports with tree shaking
import { debounce, throttle } from 'lodash';
\`\`\`

## Performance Monitoring

\`\`\`jsx
import { Profiler } from 'react';

const App = () => {
  const onRenderCallback = (id, phase, actualDuration) => {
    console.log('Component:', id);
    console.log('Phase:', phase);
    console.log('Duration:', actualDuration);
  };
  
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <MainContent />
    </Profiler>
  );
};
\`\`\`

## Conclusion

React performance optimization is an ongoing process that requires careful consideration of your application's specific needs. By implementing these techniques strategically, you can significantly improve your app's performance and user experience.

Remember to measure performance before and after optimization to ensure your changes are actually beneficial. Tools like React DevTools Profiler, Chrome DevTools, and Lighthouse can help you identify bottlenecks and validate improvements.
`,
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['React', 'Performance', 'JavaScript', 'Optimization'],
    author: 'Adrian Glazer'
  },
  {
    id: 'solidity-security-patterns',
    title: 'Essential Security Patterns for Solidity Smart Contracts',
    excerpt: 'Discover critical security patterns and best practices to write secure smart contracts and avoid common vulnerabilities.',
    content: `
# Essential Security Patterns for Solidity Smart Contracts

Smart contract security is paramount in blockchain development. A single vulnerability can lead to massive financial losses. This guide covers essential security patterns and best practices for writing secure Solidity contracts.

## Common Vulnerabilities

### 1. Reentrancy Attacks

The most famous vulnerability, exploited in the DAO hack of 2016.

\`\`\`solidity
// VULNERABLE CODE
contract VulnerableBank {
    mapping(address => uint) public balances;
    
    function withdraw() public {
        uint amount = balances[msg.sender];
        // External call before state change - DANGEROUS!
        (bool success,) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
        balances[msg.sender] = 0; // Too late!
    }
}

// SECURE VERSION
contract SecureBank {
    mapping(address => uint) public balances;
    
    function withdraw() public {
        uint amount = balances[msg.sender];
        require(amount > 0, "No balance");
        
        // State change BEFORE external call
        balances[msg.sender] = 0;
        
        (bool success,) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
    }
}
\`\`\`

### 2. Integer Overflow/Underflow

\`\`\`solidity
// VULNERABLE (in Solidity < 0.8.0)
contract VulnerableContract {
    uint8 public count = 255;
    
    function increment() public {
        count++; // Overflows to 0
    }
}

// SECURE VERSION
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract SecureContract {
    using SafeMath for uint8;
    uint8 public count = 255;
    
    function increment() public {
        count = count.add(1); // Reverts on overflow
    }
}

// Or use Solidity 0.8.0+ with built-in overflow protection
contract ModernContract {
    uint8 public count = 255;
    
    function increment() public {
        count++; // Automatically reverts on overflow
    }
}
\`\`\`

## Security Patterns

### 1. Checks-Effects-Interactions Pattern

Always follow this order to prevent reentrancy:

\`\`\`solidity
contract SecurePattern {
    mapping(address => uint) public balances;
    
    function withdraw(uint amount) public {
        // 1. CHECKS
        require(balances[msg.sender] >= amount, "Insufficient balance");
        require(amount > 0, "Amount must be positive");
        
        // 2. EFFECTS
        balances[msg.sender] -= amount;
        
        // 3. INTERACTIONS
        (bool success,) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
    }
}
\`\`\`

### 2. Reentrancy Guard

Use OpenZeppelin's ReentrancyGuard for additional protection:

\`\`\`solidity
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ProtectedContract is ReentrancyGuard {
    mapping(address => uint) public balances;
    
    function withdraw(uint amount) public nonReentrant {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        balances[msg.sender] -= amount;
        
        (bool success,) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
    }
}
\`\`\`

### 3. Access Control Patterns

\`\`\`solidity
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

// Simple owner pattern
contract SimpleOwned is Ownable {
    function sensitiveFunction() public onlyOwner {
        // Only owner can call this
    }
}

// Role-based access control
contract RoleBasedContract is AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    
    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }
    
    function mint(address to, uint amount) public onlyRole(MINTER_ROLE) {
        // Minting logic
    }
    
    function burn(uint amount) public onlyRole(BURNER_ROLE) {
        // Burning logic
    }
}
\`\`\`

### 4. Pull Over Push Pattern

Avoid pushing funds to unknown addresses:

\`\`\`solidity
contract Auction {
    mapping(address => uint) public pendingReturns;
    address public highestBidder;
    uint public highestBid;
    
    function bid() public payable {
        require(msg.value > highestBid, "Bid too low");
        
        if (highestBid != 0) {
            // Don't send directly - use pull pattern
            pendingReturns[highestBidder] += highestBid;
        }
        
        highestBidder = msg.sender;
        highestBid = msg.value;
    }
    
    function withdraw() public {
        uint amount = pendingReturns[msg.sender];
        require(amount > 0, "No funds to withdraw");
        
        pendingReturns[msg.sender] = 0;
        
        (bool success,) = msg.sender.call{value: amount}("");
        require(success, "Withdrawal failed");
    }
}
\`\`\`

### 5. Circuit Breaker Pattern

Add emergency stops to critical functions:

\`\`\`solidity
import "@openzeppelin/contracts/security/Pausable.sol";

contract EmergencyStoppable is Pausable, Ownable {
    mapping(address => uint) public balances;
    
    function deposit() public payable whenNotPaused {
        balances[msg.sender] += msg.value;
    }
    
    function withdraw(uint amount) public whenNotPaused {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        balances[msg.sender] -= amount;
        
        (bool success,) = msg.sender.call{value: amount}("");
        require(success, "Withdrawal failed");
    }
    
    function emergencyPause() public onlyOwner {
        _pause();
    }
    
    function unpause() public onlyOwner {
        _unpause();
    }
}
\`\`\`

## Input Validation and Sanitization

\`\`\`solidity
contract InputValidation {
    struct User {
        address addr;
        uint age;
        string name;
    }
    
    mapping(address => User) public users;
    
    function registerUser(
        uint _age, 
        string calldata _name
    ) public {
        // Validate inputs
        require(_age >= 18 && _age <= 120, "Invalid age");
        require(bytes(_name).length > 0 && bytes(_name).length <= 50, "Invalid name");
        require(users[msg.sender].addr == address(0), "User already registered");
        
        users[msg.sender] = User({
            addr: msg.sender,
            age: _age,
            name: _name
        });
    }
}
\`\`\`

## Gas Optimization Security

\`\`\`solidity
contract GasOptimized {
    // Use mapping instead of arrays for lookups
    mapping(address => bool) public authorized;
    
    // Pack structs efficiently
    struct PackedStruct {
        uint128 value1; // 16 bytes
        uint128 value2; // 16 bytes
        bool flag;      // 1 byte - packed in same slot
    }
    
    // Use events for cheaper storage
    event DataStored(address indexed user, uint256 value);
    
    function storeData(uint256 value) public {
        // Instead of storing in state variable
        emit DataStored(msg.sender, value);
    }
}
\`\`\`

## Testing Security

\`\`\`javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Security Tests", function () {
    let contract;
    let owner, attacker;
    
    beforeEach(async function () {
        [owner, attacker] = await ethers.getSigners();
        const Contract = await ethers.getContractFactory("SecureContract");
        contract = await Contract.deploy();
    });
    
    it("Should prevent reentrancy attacks", async function () {
        // Deploy malicious contract
        const AttackContract = await ethers.getContractFactory("ReentrancyAttack");
        const attackContract = await AttackContract.deploy(contract.address);
        
        // Fund the contract
        await contract.connect(owner).deposit({ value: ethers.utils.parseEther("1") });
        
        // Attempt reentrancy attack
        await expect(
            attackContract.connect(attacker).attack({ value: ethers.utils.parseEther("0.1") })
        ).to.be.revertedWith("ReentrancyGuard: reentrant call");
    });
    
    it("Should handle access control properly", async function () {
        await expect(
            contract.connect(attacker).adminFunction()
        ).to.be.revertedWith("Ownable: caller is not the owner");
    });
});
\`\`\`

## Security Checklist

Before deploying any smart contract:

✅ **Access Control**: Implement proper role-based permissions  
✅ **Input Validation**: Validate all function parameters  
✅ **Reentrancy Protection**: Use checks-effects-interactions pattern  
✅ **Integer Safety**: Handle overflows/underflows  
✅ **External Calls**: Minimize and secure external interactions  
✅ **Gas Limits**: Consider gas optimization and DOS attacks  
✅ **Testing**: Write comprehensive tests including edge cases  
✅ **Auditing**: Get contracts audited by security professionals  
✅ **Upgradability**: Plan for bug fixes and improvements  
✅ **Monitoring**: Implement event logging for tracking  

## Conclusion

Smart contract security requires constant vigilance and adherence to established patterns. The immutable nature of blockchain makes it crucial to get security right from the start. 

Always stay updated with the latest security research, use established libraries like OpenZeppelin, and never skip comprehensive testing and auditing for contracts handling significant value.

Remember: in blockchain development, security isn't just a feature—it's the foundation of trust.
`,
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['Solidity', 'Security', 'Smart Contracts', 'Best Practices'],
    author: 'Adrian Glazer'
  },
  {
    id: 'nextjs-13-features',
    title: 'Exploring Next.js 13: App Directory and Server Components',
    excerpt: 'Deep dive into Next.js 13\'s revolutionary app directory and server components, and how they change the way we build React applications.',
    content: `
# Exploring Next.js 13: App Directory and Server Components

Next.js 13 introduced revolutionary changes with the new App Router and Server Components. This guide explores these game-changing features and how they transform React application development.

## The App Directory Revolution

The new \`app\` directory represents a fundamental shift in how Next.js applications are structured. It introduces a new routing system based on the React Server Components specification.

### File-based Routing with app

\`\`\`
app/
├── page.tsx                 # Home page (/)
├── about/
│   └── page.tsx            # About page (/about)
├── blog/
│   ├── page.tsx            # Blog listing (/blog)
│   └── [slug]/
│       └── page.tsx        # Dynamic blog posts (/blog/[slug])
├── dashboard/
│   ├── layout.tsx          # Dashboard layout
│   ├── page.tsx            # Dashboard home (/dashboard)
│   ├── analytics/
│   │   └── page.tsx        # Analytics page (/dashboard/analytics)
│   └── settings/
│       └── page.tsx        # Settings page (/dashboard/settings)
└── globals.css
\`\`\`

### Special Files in app Directory

\`\`\`typescript
// app/layout.tsx - Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>Global Navigation</nav>
        {children}
        <footer>Global Footer</footer>
      </body>
    </html>
  );
}

// app/loading.tsx - Loading UI
export default function Loading() {
  return <div>Loading...</div>;
}

// app/error.tsx - Error UI
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

// app/not-found.tsx - 404 page
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}
\`\`\`

## Server Components Deep Dive

React Server Components render on the server and send minimal JavaScript to the client.

### Server vs Client Components

\`\`\`typescript
// Server Component (default in app directory)
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post: any) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <InteractiveButton postId={post.id} />
        </article>
      ))}
    </div>
  );
}

// Client Component (when interactivity is needed)
// components/InteractiveButton.tsx
'use client';

import { useState } from 'react';

export default function InteractiveButton({ postId }: { postId: string }) {
  const [liked, setLiked] = useState(false);
  
  return (
    <button 
      onClick={() => setLiked(!liked)}
      className={liked ? 'text-red-500' : 'text-gray-500'}
    >
      {liked ? '❤️' : '🤍'} Like
    </button>
  );
}
\`\`\`

### Benefits of Server Components

1. **Zero Bundle Size**: Server Components don't add to client JavaScript
2. **Direct Backend Access**: Fetch data directly from databases/APIs
3. **Improved SEO**: Content is server-rendered
4. **Better Performance**: Reduced client-side hydration

### Data Fetching in Server Components

\`\`\`typescript
// Direct database access
import { sql } from '@vercel/postgres';

async function getUsers() {
  const { rows } = await sql\`SELECT * FROM users\`;
  return rows;
}

// API calls with caching
async function getProduct(id: string) {
  const res = await fetch(\`https://api.store.com/products/\$\{id\}\`, {
    next: { 
      revalidate: 3600, // ISR: revalidate every hour
      tags: ['product'] // Cache tags for on-demand revalidation
    }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  
  return res.json();
}

export default async function ProductPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const product = await getProduct(params.id);
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddToCartButton product={product} />
    </div>
  );
}
\`\`\`

## Advanced Layouts and Route Groups

### Nested Layouts

\`\`\`typescript
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-container">
      <aside>
        <nav>Dashboard Navigation</nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}

// app/dashboard/analytics/layout.tsx
export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="analytics-layout">
      <header>Analytics Header</header>
      {children}
    </div>
  );
}
\`\`\`

### Route Groups

\`\`\`
app/
├── (marketing)/
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── (shop)/
│   ├── products/
│   │   └── page.tsx
│   └── cart/
│       └── page.tsx
└── (auth)/
    ├── login/
    │   └── page.tsx
    └── register/
        └── page.tsx
\`\`\`

## Streaming and Suspense

\`\`\`typescript
import { Suspense } from 'react';

// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<div>Loading user info...</div>}>
        <UserInfo />
      </Suspense>
      <Suspense fallback={<div>Loading analytics...</div>}>
        <Analytics />
      </Suspense>
    </div>
  );
}

async function UserInfo() {
  // This can load independently
  const user = await fetchUser();
  return <div>Welcome, {user.name}!</div>;
}

async function Analytics() {
  // This can also load independently
  const analytics = await fetchAnalytics();
  return <div>Page views: {analytics.views}</div>;
}
\`\`\`

## Metadata and SEO

\`\`\`typescript
import { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'My App',
  description: 'Welcome to my Next.js 13 app',
};

// Dynamic metadata
export async function generateMetadata({ 
  params 
}: {
  params: { id: string }
}): Promise<Metadata> {
  const product = await fetch(\`/api/products/\$\{params.id\}\`).then(res => res.json());
  
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}
\`\`\`

## Migration from Pages Router

### Key Differences

\`\`\`typescript
// Pages Router (pages/blog/[slug].tsx)
import { GetServerSideProps } from 'next';

interface Props {
  post: Post;
}

export default function BlogPost({ post }: Props) {
  return <div>{post.title}</div>;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await fetchPost(params?.slug as string);
  return { props: { post } };
};

// App Router (app/blog/[slug]/page.tsx)
interface Props {
  params: { slug: string };
}

export default async function BlogPost({ params }: Props) {
  const post = await fetchPost(params.slug);
  return <div>{post.title}</div>;
}
\`\`\`

### Migration Strategy

1. **Gradual Migration**: Keep both \`pages\` and \`app\` directories
2. **Start with Layouts**: Move common layouts first
3. **Convert Static Pages**: Begin with pages that don't require client interactivity
4. **Handle Dynamic Routes**: Convert dynamic routing gradually
5. **Update Data Fetching**: Replace getServerSideProps with async components

## Performance Benefits

### Bundle Analysis

\`\`\`typescript
// Before: Client Component with large dependencies
'use client';
import { Chart } from 'heavy-chart-library'; // 200KB

export default function Dashboard() {
  return <Chart data={data} />;
}

// After: Server Component + lazy-loaded Client Component
import { Suspense } from 'react';
import LazyChart from './LazyChart';

export default async function Dashboard() {
  const data = await fetchData(); // Runs on server
  
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<div>Loading chart...</div>}>
        <LazyChart data={data} />
      </Suspense>
    </div>
  );
}
\`\`\`

### Automatic Code Splitting

Next.js 13 automatically splits code at the route level and component level, resulting in smaller initial bundles and faster page loads.

## Best Practices

1. **Use Server Components by Default**: Only add 'use client' when needed
2. **Keep Client Components Small**: Minimize the JavaScript sent to browsers
3. **Leverage Streaming**: Use Suspense for better perceived performance
4. **Optimize Images**: Use next/image with the new app directory
5. **Cache Strategically**: Use appropriate caching strategies for data fetching

## Conclusion

Next.js 13's App Router and Server Components represent a paradigm shift in React development. They offer:

- **Better Performance**: Reduced JavaScript bundles and faster loading
- **Improved Developer Experience**: Simpler data fetching and routing
- **Enhanced SEO**: Better server-side rendering capabilities
- **Future-Proof Architecture**: Built on React's latest innovations

The transition requires learning new patterns, but the benefits in performance, SEO, and developer experience make it worthwhile for modern React applications.

Start experimenting with these features in new projects and gradually migrate existing applications to take advantage of Next.js 13's powerful capabilities.
`,
    date: '2023-12-28',
    readTime: '7 min read',
    tags: ['Next.js', 'React', 'Server Components', 'App Directory'],
    author: 'Adrian Glazer'
  }
];

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(post => post.id === slug);
  
  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}