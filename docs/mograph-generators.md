# Generator Nodes

## Node Listing

Generative Art:

- vDuplicateBlop
- vGridBlob
- vKaleidoscope
- vSignalLines
- vSinusoidalWaves
- vVoronoiShapes

Grid & Pattern:

- vBentoGrid
- vCapsuleGrid
- vGridPatternArranger
- vIrregularGrid
- vShapeTextureGenerator

Circuit & Digital:

- vAsciiBBoxOverlay
- vCelestialTrails
- vDigitalTree
- vSignalTrails

Shape & Path:

- vIK_CharacterRig
- vISOShapeBuilder
- vPolygonPathLoader
- vSegmentedSineShape
- vShapeFracturerEnhanced
- vSpiderWalker
- vTangentFlow
- vTypeExtendPath


Image Effects:

- vImageStripDisplacer

Proximity & Effectors:

- vProximityEffectShapes
- vProximityEffectText


Text & Typography:

- vLineFont
- vTextRedistribute
- vTextStaggerDirection
- vVariableText
- vVariableTextPro

Tracking & Data:

- vTrackingArrayMatrix

Dev Tools:

- vParametricPlotterSVG

---

## Node Docs

### Generative Art

#### vDuplicateBlop

Generates organic contour line artwork with wave distortion

![Node](Images/Nodes/vDuplicateBlop.png ':size=600')

Example Node Connections:

    Background.Output -> vDuplicateBlop.Input
    vDuplicateBlop.Output -> MediaOut

#### vGridBlob

Generate organic blob shapes using marching squares with pre-computed templates

![Node](Images/Nodes/vGridBlob.png ':size=600')

Example Node Connections:

    Background.Output -> vGridBlob.Input
    vGridBlob.Output  -> MediaOut

#### vKaleidoscope

Complete CC Kaleida style kaleidoscope effect with advanced features

![Node](Images/Nodes/vKaleidoscope.png ':size=600')

Example Node Connections:

    MediaIn.Output -> vKaleidoscope.Input
    vKaleidoscope.Output -> MediaOut

#### vSignalLines

Generates flowing horizontal lines with wave distortion

![Node](Images/Nodes/vSignalLines.png ':size=600')

Example Node Connections:

    Background.Output -> vSignalLines.Input
    vSignalLines.Output -> MediaOut

#### vSinusoidalWaves

Generates layered sinusoidal waves with depth and motion

![Node](Images/Nodes/vSinusoidalWaves.png ':size=600')

Example Node Connections:

    Background.Output -> vSinusoidalWaves.Input 
    vSinusoidalWaves.Output -> MediaOut

#### vVoronoiShapes

Generates animated organic Voronoi cellular patterns with simplification

![Node](Images/Nodes/vVoronoiShapes.png ':size=600')

Example Node Connections:

    Background.Output -> vVoronoiShapes.Input
    vVoronoiShapes.Output -> MediaOut
    Background.Output -> Merge.Background

---

### Grid & Pattern

#### vBentoGrid

Bento grid with image integration and staggered reveal animation

![Node](Images/Nodes/vBentoGrid.png ':size=600')

Accepts up to 6 image inputs. Cells can be animated with staggered reveal timing.

Example Node Connections:

    MediaIn1.Output -> vBentoGrid.Image1
    MediaIn2.Output -> vBentoGrid.Image2
    Background.Output -> vBentoGrid.Input
    vBentoGrid.Output -> MediaOut

#### vCapsuleGrid

Map-driven capsule grid — pill width and color follow a grayscale shape map

![Node](Images/Nodes/vCapsuleGrid.png ':size=600')

Example Node Connections:

    MediaIn.Output -> vCapsuleGrid.MapInput
    Background.Output -> vCapsuleGrid.Input
    vCapsuleGrid.Output -> MediaOut



#### vGridPatternArranger

Creates interwoven directional grid patterns — with extended tile types, blending modes, and animation controls

![Node](Images/Nodes/vGridPatternArranger_Pro.png ':size=600')


Example Node Connections:

    Background.Output -> vGridPatternArranger.Input
    vGridPatternArranger.Output -> MediaOut

#### vIrregularGrid

Irregular Grid with shapes, animation, colors, export, and recursion

![Node](Images/Nodes/vIrregularGrid.png ':size=600')

Example Node Connections:

    Background.Output -> vIrregularGrid.Input
    vIrregularGrid.Output -> MediaOut

#### vShapeTextureGenerator

Generates procedural textures

![Node](Images/Nodes/vShapeTextureGenerator.png ':size=600')

Example Node Connections:

    Background.Output -> vShapeTextureGenerator.Input
    vShapeTextureGenerator.Output -> MediaOut


---

### Circuit & Digital

#### vAsciiBBoxOverlay

ASCII grid overlay

![Node](Images/Nodes/vAsciiBBoxOverlay.png ':size=600')

Example Node Connections:

    MediaIn.Output -> vAsciiBBoxOverlay.Input
    vAsciiBBoxOverlay.Output -> MediaOut

#### vCelestialTrails

Generates animated sine wave lines with all features

![Node](Images/Nodes/vCelestialTrails.png ':size=600')

Example Node Connections:

    Background.Output -> vCelestialTrails.Input
    vCelestialTrails.Output -> MediaOut

#### vDigitalTree

Circuit board style digital tree generator

![Node](Images/Nodes/vDigitalTree.png ':size=600')

Example Node Connections:

    Background.Output -> vDigitalTree.Input
    vDigitalTree.Output -> MediaOut



#### vSignalTrails

kNN + Dijkstra + multiple texture routing types + Shape render of electric trails on a grid

![Node](Images/Nodes/vSignalTrails_Pro.png ':size=600')


The following additional options are available:

- ScriptVal point cloud input (Vonk Ultra)
- Uncapped paths and k-nearest neighbors
- 6 texture routing types: Checker, Noise, Voronoi, Stripes, Radial, Image
- Dotted and Dashed stroke styles
- Per-path HSV colour variation
- Path smoothing via Chaikin iterations (0–5)
- Advanced node shapes: Square, Triangle, N-sided Polygon

Example Node Connections:

    Background.Output -> vSignalTrails.Input
    vSignalTrails.Output -> MediaOut

ScriptVal Point Cloud Node Connections:

    
    ScriptVal Create Nodes.Output -> vSignalTrails.ScriptVal
    Background.Output -> vSignalTrails.Input
    vSignalTrails.Output -> MediaOut

---

### Shape & Path

#### vIK_CharacterRig

Simple torso with two-bone IK legs

> ⚠️ **Still in development** — available as an early build. Expect changes to parameters and behaviour in future releases.

![Node](Images/Nodes/vIK_CharacterRig.png ':size=600')

Example Node Connections:

    Background.Output -> vIK_CharacterRig.Input
    vIK_CharacterRig.Output -> MediaOut

#### vISOShapeBuilder

Advanced isometric shape builder with build-on animation

![Node](Images/Nodes/vISOShapeBuilder.png ':size=600')

Example Node Connections:

    Background.Output -> vISOShapeBuilder.Input
    vISOShapeBuilder.Output -> MediaOut

#### vPolygonPathLoader

Load and render a polygon (Effect Mask) with point data output

Example Node Connections:

    EffectMask.Output -> vPolygonPathLoader.Points
    vPolygonPathLoader.Points -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.vArrayPointsOnCircle
    Background.Output -> vArrayShapeRender.Input


#### vSegmentedSineShape

Animated segmented shapes following a path — with extended easing, colour, and per-segment controls

![Node](Images/Nodes/vSegmentedSineShape_Pro.png ':size=600')


Example Node Connections:

    Background.Output -> vSegmentedSineShape.Input
    vSegmentedSineShape.Output -> MediaOut

#### vShapeFracturerEnhanced

Fractures with area optimization and animation helpers
With ScriptVal Point Cloud Node Connections.

![Node](Images/Nodes/vShapeFracturerEnhanced.png ':size=600')

Example Node Connections:

    ScriptVal Create Nodes.Output -> vShapeFracturerEnhanced.ScriptVal
    vShapeFracturerEnhanced.Output -> MediaOut


#### vSpiderWalker

Spider walker that walks on a grid of points

![Node](Images/Nodes/vSpiderWalker.png ':size=600')

Example Node Connections:

    Background.Output -> vSpiderWalker.Input
    vSpiderWalker.Output -> MediaOut



#### vTangentFlow

Advanced: Hofmann tangent shapes with motion, color blending, and multi-mode growth animation

![Node](Images/Nodes/vTangentFlow.png ':size=600')


Example Node Connections:

    Background.Output -> vTangentFlow.Input
    vTangentFlow.Output -> MediaOut



#### vTypeExtendPath

Segmented paths with scalable Euler Spiral extensions — with advanced path controls and animation options
With JSON Point Cloud Node Connections.

![Node](Images/Nodes/vTypeExtendPath_Pro.png ':size=600')


Example Node Connections:


    JSON Create Node -> Custom Shape.Input
    Background.Output -> vTypeExtendPath.Input
    vTypeExtendPath.Output -> MediaOut


---

### Image Effects

#### vImageStripDisplacer

Strip slicer with per-strip glitch, colour grading, chromatic aberration, and wave animation

![Node](Images/Nodes/vImageStripDisplacer_Pro.png ':size=600')


The following additional options are available:

- Per-strip Hue Shift with randomised variation
- Colour Grading: per-strip gain (R/G/B), gamma, and saturation
- Chromatic Aberration: per-strip RGB channel split
- Per-strip Blur 
- Strip Gradient overlay with 17 blend modes
- Inner Shadow and Edge Glow
- 8 wave shapes and 15 easing curves for animated transforms

Example Node Connections:

    MediaIn.Output -> vImageStripDisplacer.Input
    vImageStripDisplacer.Output -> MediaOut

---

### Proximity & Effectors

#### vProximityEffectShapes

Proximity-driven shape grid with 3 effectors, custom falloff curves, and animation stagger

![Node](Images/Nodes/vProximityEffectShapes_Pro.png ':size=600')


The following additional options are available:

- Third effector with Max, Add, Multiply, or Average blending
- External JSON effectors: drive positions from a Vonk Ultra array
- 5 additional falloff curves: Ease In, Ease Out, Exponential, Spike, Step
- Animation Stagger: build-on across the grid over time with easing
- Custom image tile input with Shape/Image blend slider

External Effector Node Connections:
  
    JSON Point XYZ Cloud.Output -> vProximityEffectShapes.Effectors
    Background.Output -> vProximityEffectShapes.Input
    vProximityEffectShapes.Output -> MediaOut



#### vProximityEffectText

Per-character proximity effects with text on path, rotation, blur, and opacity

![Node](Images/Nodes/vProximityEffectText_Pro.png ':size=600')


Example Node Connections:

    Background.Output -> vProximityEffectText.Input
    vProximityEffectText.Output -> MediaOut


---

### Text & Typography

#### vLineFont

Line-based Font Renderer

![Node](Images/Nodes/vLineFont.png ':size=600')

Example Node Connections:

    Background.Output -> vLineFont.Input
    vLineFont.Output -> MediaOut


#### vTextRedistribute

Text Path Point Redistribution

![Node](Images/Nodes/vTextRedistribute.png ':size=600')

Example Node Connections:

    Background.Output -> vTextRedistribute.Input
    vTextRedistribute.Output -> MediaOut


#### vTextStaggerDirection

GSAP-style Stagger Direction Text Animation

![Node](Images/Nodes/vTextStaggerDirection.png ':size=600')

Example Node Connections:

    Background.Output -> vTextStaggerDirection.Input
    vTextStaggerDirection.Output -> MediaOut

#### vVariableText

Enhanced variable font renderer with auto-axis detection

![Node](Images/Nodes/vVariableText.png ':size=600')

The following variable axes are available in the free version:

- Weight
- Width

Example Node Connections:

    Background.Output -> vVariableText.Input
    vVariableText.Output -> MediaOut


#### vVariableTextPro

Enhanced variable font renderer with auto-axis detection — Pro edition with full axis access and animation

![Node](Images/Nodes/vVariableText_Pro.png ':size=600')


The following additional axes are available:

- Slant, Italic, Optical Size, Grade
- Counter Width (XTRA), Thick Stroke (XOPQ), Thin Stroke (YOPQ)
- Lowercase Height (YTLC), Uppercase Height (YTUC), Ascender (YTAS), Descender (YTDE), Figure Height (YTFI)
- Cursive (CRSV), Monospace (MONO), Casual (CASL), Softness (SOFT), Fill (FILL), Wonky (WONK)
- Roundness (ROND), Horizontal (HRZN), Vertical (VRTC)
- 10 custom axis slots
- Outline render mode
- Per-character animation

Example Node Connections:

    Custom JSON Font -> vVariableTextPro.Input
    Background.Output -> vVariableTextPro.Input
    vVariableTextPro.Output -> MediaOut


---

### Tracking & Data

#### vTrackingArrayMatrix

Creates surveillance-style tracking boxes with coordinates — with extended box styles, labels, and animation

![Node](Images/Nodes/vTrackingArrayMatrix_Pro.png ':size=600')


Example Node Connections:

    MediaIn.Output -> vTrackingArrayMatrix.Input
    vTrackingArrayMatrix.Output -> MediaOut

Array-driven tracking Node Connections:


    JSON Point XYZ Cloud.Output -> vTrackingArrayMatrix.PathData
    MediaIn.Output -> vTrackingArrayMatrix.Input
    vTrackingArrayMatrix.Output -> MediaOut

---

### Dev Tools

#### vParametricPlotterSVG

Parametric curve plotter with 39 presets, custom equations, adaptive sampling, and SVG export

![Node](Images/Nodes/vParametricPlotterSVG.png ':size=600')

39 built-in presets covering classical parametric forms: Circle, Ellipse, Lissajous, Rose, Butterfly, Cardioid, Astroid, Epicycloid, Hypocycloid, Archimedean Spiral, Logarithmic Spiral, Fermat Spiral, Limacon, Trefoil, Deltoid, Rhodonea, Epitrochoid, Viviani, Lemniscate, Superellipse, Cycloid, Hypotrochoid, Scarabaeus, Witch of Agnesi, Cassini Oval, Harmonograph, Gielis Curve, and more. Swap to Custom to type any x(t) / y(t) expression.

The following additional options are available:

- SVG export: writes a production-ready `.svg` with grid, axes, labels, and curve path — coordinate math mirrors the raster preview exactly
- Adaptive sampling: automatically subdivides high-curvature regions
- Custom equations: full Lua math library, sandboxed and validated
- Adjustable bounds: X/Y viewport and t range independently, with aspect lock
- Grid, axes, and labels: configurable spacing, axis highlighting, numeric labels
- Draw animation: animate the curve drawing on over time with speed and loop control
- Show points: overlay sampled point positions for debugging or visual style

Example Node Connections:

    Background.Output -> vParametricPlotterSVG.Input
    vParametricPlotterSVG.Output -> MediaOut
