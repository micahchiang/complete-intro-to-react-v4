webpackJsonp([0xd93b7aa7cab4],{359:function(n,a){n.exports={data:{markdownRemark:{html:'<p>In previous versions of this course we used various iterations of the <a href="https://reacttraining.com/react-router/">React Router</a>. React Router is a fantastic library and you should give serious consideration to using it in your project. As of writing, the last version of this workshop taught the still-current version of React Router, version 4. Feel free to check it out.</p>\n<p><a href="https://github.com/reach/router">Reach Router</a> is a new router from one of the creators of React Router, <a href="https://twitter.com/ryanflorence">Ryan Florence</a>. Ryan took much of his learnings from making React Router and made a simpler, more accessible, and easier to accomplish advanced tasks like animated transitions while still maintaining a similar API to React Router. Great piece of technology.</p>\n<p>What we want to do now is to add a second page to our application: a Details page where you can out more about each animal.</p>\n<p>First, let\'s split what we out of App and into a Results page so we can then have <em>two</em> pages.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// Results.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> pf <span class="token keyword">from</span> <span class="token string">"petfinder-client"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Pet <span class="token keyword">from</span> <span class="token string">"./Pet"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> petfinder <span class="token operator">=</span> <span class="token function">pf</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  key<span class="token punctuation">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">API_KEY</span><span class="token punctuation">,</span>\n  secret<span class="token punctuation">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">API_SECRET</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Results</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      pets<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    petfinder<span class="token punctuation">.</span>pet\n      <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> location<span class="token punctuation">:</span> <span class="token string">"Seattle, WA"</span><span class="token punctuation">,</span> output<span class="token punctuation">:</span> <span class="token string">"full"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> pets<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>petfinder<span class="token punctuation">.</span>pets <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>petfinder<span class="token punctuation">.</span>pets<span class="token punctuation">.</span>pet<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>petfinder<span class="token punctuation">.</span>pets<span class="token punctuation">.</span>pet<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            pets <span class="token operator">=</span> data<span class="token punctuation">.</span>petfinder<span class="token punctuation">.</span>pets<span class="token punctuation">.</span>pet<span class="token punctuation">;</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            pets <span class="token operator">=</span> <span class="token punctuation">[</span>data<span class="token punctuation">.</span>petfinder<span class="token punctuation">.</span>pets<span class="token punctuation">.</span>pet<span class="token punctuation">]</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          pets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          pets<span class="token punctuation">:</span> pets\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"search"</span><span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>pets<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>pet <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">let</span> breed<span class="token punctuation">;</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>pet<span class="token punctuation">.</span>breeds<span class="token punctuation">.</span>breed<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            breed <span class="token operator">=</span> pet<span class="token punctuation">.</span>breeds<span class="token punctuation">.</span>breed<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            breed <span class="token operator">=</span> pet<span class="token punctuation">.</span>breeds<span class="token punctuation">.</span>breed<span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n          <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>Pet\n              animal<span class="token operator">=</span><span class="token punctuation">{</span>pet<span class="token punctuation">.</span>animal<span class="token punctuation">}</span>\n              key<span class="token operator">=</span><span class="token punctuation">{</span>pet<span class="token punctuation">.</span>id<span class="token punctuation">}</span>\n              name<span class="token operator">=</span><span class="token punctuation">{</span>pet<span class="token punctuation">.</span>name<span class="token punctuation">}</span>\n              breed<span class="token operator">=</span><span class="token punctuation">{</span>breed<span class="token punctuation">}</span>\n              media<span class="token operator">=</span><span class="token punctuation">{</span>pet<span class="token punctuation">.</span>media<span class="token punctuation">}</span>\n              location<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pet<span class="token punctuation">.</span>contact<span class="token punctuation">.</span>city<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pet<span class="token punctuation">.</span>contact<span class="token punctuation">.</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span>\n            <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Results<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>then</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Results <span class="token keyword">from</span> <span class="token string">"./Results"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>h1<span class="token operator">></span>Adopt Me<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Results <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Let\'s quickly make a second page so we can switch between the two. Make file called Details.js.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Details</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>hi<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Details<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Now the Results page is its own component. This makes it easy to bring in the router to be able to switch pages. Run <code class="language-text">npm install @reach/router</code>.</p>\n<p>Now we have two pages and the router available. Let\'s go make it ready to switch between the two.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// at top</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reach/router"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Details <span class="token keyword">from</span> <span class="token string">"./Details"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// replace &lt;Results /></span>\n<span class="token operator">&lt;</span>Router<span class="token operator">></span>\n  <span class="token operator">&lt;</span>Results path<span class="token operator">=</span><span class="token string">"/"</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token operator">&lt;</span>Details path<span class="token operator">=</span><span class="token string">"/details/:id"</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Now we have the router working! Try navigating to <a href="http://localhost:1234/">http://localhost:1234/</a> and then to <a href="http://localhost:1234/details/1">http://localhost:1234/details/1</a>. Both should work!</p>\n<ul>\n<li>Reach Router has a ton of features that we\'re not going to explain here. The docs do a great job.</li>\n<li>With Reach Router, you make your component the Route component (unlike React Router) by giving it a path attribute. Reach Router then will find the path that it most matches (it figures this out by a scoring algorithm the functions intuitively; this CSS selector.)</li>\n<li>The <code class="language-text">:id</code> part is a variable. In <code class="language-text">http://localhost:1234/details/1</code>, <code class="language-text">1</code> would be the variable.</li>\n<li>The killer feature of Reach Router is that it\'s really accessible. It manages things like focus so you don\'t have to. Pretty great.</li>\n</ul>\n<p>So now let\'s make the two pages link to each other. Go to Pet.js.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// at top</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reach/router"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// change wrapping div</span>\n<span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`/details/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"pet"</span><span class="token operator">></span>\n  <span class="token punctuation">[</span>…<span class="token punctuation">]</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Go to Results and pass in the id.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">id<span class="token operator">=</span><span class="token punctuation">{</span>pet<span class="token punctuation">.</span>id<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now each result is a link to a details page! And that id is being passed as a prop to Details. Try replacing the return of Details with <code class="language-text">return &lt;h1&gt;{this.props.id}&lt;/h1&gt;;</code>. You should see the number.</p>\n<p>Let\'s make the Adopt Me! header clickable too.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// import Link too</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Router<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reach/router"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// replace h1</span>\n<span class="token operator">&lt;</span>header<span class="token operator">></span>\n  <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>Adopt Me<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="-89678fe3f663be06f80e93370942592c03f3f5db"><a href="#-89678fe3f663be06f80e93370942592c03f3f5db" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🌳 <a href="https://github.com/btholt/complete-intro-to-react-v4/commit/89678fe3f663be06f80e93370942592c03f3f5db">89678fe3f663be06f80e93370942592c03f3f5db</a></h2>\n<p>Now if you click the header, it\'ll take you back to the Results page. Cool. Now let\'s round out the Details page.</p>',frontmatter:{path:"/reach-router",title:"Reach Router",order:7}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:1,path:"/intro",title:"Introduction"}}},{node:{frontmatter:{order:2,path:"/pure-react",title:"Pure React"}}},{node:{frontmatter:{order:3,path:"/eslint-prettier",title:"npm, ESLint & Prettier"}}},{node:{frontmatter:{order:4,path:"/parcel",title:"Parcel"}}},{node:{frontmatter:{order:5,path:"/jsx",title:"JSX"}}},{node:{frontmatter:{order:6,path:"/react-state-and-lifecycles",title:"State and Lifecycle Methods with React"}}},{node:{frontmatter:{order:7,path:"/reach-router",title:"Reach Router"}}},{node:{frontmatter:{order:8,path:"/async-and-events-in-react",title:"Handling Events and Async UIs with React"}}},{node:{frontmatter:{order:9,path:"/forms",title:"Forms with React"}}},{node:{frontmatter:{order:10,path:"/context",title:"Context"}}},{node:{frontmatter:{order:11,path:"/portals",title:"Portals"}}},{node:{frontmatter:{order:12,path:"/conclusion",title:"Conclusion"}}},{node:{frontmatter:{order:13,path:"/testing",title:"Testing"}}},{node:{frontmatter:{order:14,path:"/emotion",title:"Emotion"}}},{node:{frontmatter:{order:15,path:"/code-splitting",title:"Code Splitting"}}},{node:{frontmatter:{order:16,path:"/redux",title:"Redux"}}},{node:{frontmatter:{order:17,path:"/server-side-rendering",title:"Server Side Rendering"}}},{node:{frontmatter:{order:18,path:"/preact",title:"Preact"}}},{node:{frontmatter:{order:19,path:"/code-organization",title:"Code Organization"}}},{node:{frontmatter:{order:20,path:"/typescript",title:"TypeScript"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---reach-router-d909a6ea6e74341fbd29.js.map