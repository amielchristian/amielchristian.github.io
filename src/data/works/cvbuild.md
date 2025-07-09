---
title: 'CVBuild'
repository: https://github.com/amielchristian/bini
liveDemo: https://amielchristian.github.io/cvbuild
description: A resumé/CV builder, completely on the client.
techStack: ['Svelte', 'WebAssembly', 'TypeScript', 'Tailwind']
---
Inspired by [Resumake](resumake.io), this project marks somewhat of a milestone in my web development journey. Here, I was able to take not one, but two technologies that I didn't really know much about (i.e., Svelte and WebAssembly) and have a good time.

Initially, I was planning to build the LaTeX compilation module in Rust and compile it to WASM, but I hit a bit of a roadblock when I couldn't get Tectonic to work. I shelved the whole thing when I found [SwiftLaTeX](https://github.com/SwiftLaTeX/SwiftLaTeX), a WASM module that does exactly what I wanted to do.

Thankfully, it wasn't as simple as installing the WASM files and gluing it into what I already had - I had to put in effort and do quite a bit of research to get SwiftLaTeX to work with what I already had. [flying-sheep]()'s [swift-tikz](github.com/flying-sheep/swift-tikz) was very helpful in this regard.