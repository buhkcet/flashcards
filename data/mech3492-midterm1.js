/* MECH 3492 · Midterm 1, Part 1
   Registered as "mech3492/midterm1" (must match the course and exam ids in data/courses.js).
   Migrated from "MECH 3492 Flashcards.html". No chapters: n is the card's number in that file. */
FC.register("mech3492/midterm1",(()=>{
/* Cards: {n, q, a, why, mis (optional common mistake), chk (optional: verify against notes)}.
   Add ch (and optionally lec) to group cards by chapter; cards without ch are listed together. */
const D=[
{n:"1",q:"Incompressibility test #1: condition on density?",a:"ρ = constant, so Dρ/Dt = 0",why:"Any time or space derivative of ρ is zero. 'Constant mass flow rate' is a steady-flow statement and also holds for compressible flow."},
{n:"2",q:"Incompressibility test #2: condition on the velocity field?",a:"∇·V = 0, i.e. ∂u/∂x + ∂v/∂y + ∂w/∂z = 0",why:"Divergence-free: no net volume flux out of any infinitesimal control volume (no sources or sinks). Write it in components."},
{n:"3",q:"Define the material derivative.",a:"D( )/Dt = ∂( )/∂t + V·∇( )",why:"Rate of change of a quantity following a fluid particle = transient rate + convective rate."},
{n:"4",q:"What does the transient term ∂( )/∂t represent?",a:"Change with time at a fixed point",why:"Zero for steady flow. Picture a fixed thermometer whose reading drifts over time."},
{n:"5",q:"What does the convective term V·∇( ) represent?",a:"Change because the particle moves to where the field differs",why:"Needs both V ≠ 0 and ∇( ) ≠ 0. For velocity, V·∇V is the convective acceleration."},
{n:"6",q:"Can a steady flow have nonzero acceleration?",a:"Yes, through convective acceleration V·∇V",why:"Steady means ∂V/∂t = 0, but particles still speed up through a converging nozzle."},
{n:"7",q:"Number of components: scalar, vector, second-order tensor?",a:"1, 3, 9",why:"Scalar = order 0, vector = order 1, tensor = 3×3. All are functions of t and r."},
{n:"8",q:"Give one example each of a scalar, vector and tensor field.",a:"Scalar: p or T · Vector: V, ∇p · Tensor: stress τ, ∇V",why:"A vector is a 1st-order tensor; a scalar is a 0th-order tensor."},
{n:"9",q:"How does the gradient change tensor order?",a:"Increases it by 1",why:"Scalar → vector (∇p); vector → tensor (∇V)."},
{n:"10",q:"How does the divergence change tensor order?",a:"Decreases it by 1",why:"Vector → scalar (∇·V); tensor → vector (∇·τ)."},
{n:"11",q:"What is the gradient of a vector?",a:"A tensor: the velocity gradient tensor ∇V",why:"9 components ∂Vj/∂xi (Ch1 Eq. 5)."},
{n:"12",q:"What is the divergence of a tensor, and where does it appear?",a:"A vector: ∇·τ in the momentum equation",why:"ρ DV/Dt = ∇·τ + ρf. It is the net surface force per unit volume."},
{n:"13",q:"State the divergence (Gauss's) theorem.",a:"∭ ∇·A dV = ∯ A·dS",why:"Relates a volume integral of the divergence to the flux through the closed bounding surface (3-D ↔ 2-D)."},
{n:"14",q:"Physical meaning of the divergence of A at a point P?",a:"Net flux of A out of an infinitesimal CV around P, per unit volume",why:"div A = lim(V→0) (1/V) ∯ A·n̂ dS."},
{n:"15",q:"∇·(∇×a) = ?",a:"0",why:"Div of curl is identically zero; mixed second derivatives cancel in pairs."},
{n:"16",q:"∇×(∇φ) = ?",a:"0 (zero vector)",why:"Curl of a gradient is identically zero, so a gradient field is always irrotational."},
{n:"17",q:"What is Laplace's equation, and what is a solution called?",a:"∇²φ = 0; a harmonic function",why:"Fluids example: stream function of irrotational 2-D flow, ∇²ψ = 0."},
{n:"18",q:"What is Poisson's equation? Give an example.",a:"∇²φ = f(x,y,z) ≠ 0",why:"Steady conduction with a source: α∇²T + S = 0. Rotating 2-D flow: ∇²ψ = −2ω_z. Laplace is the case f ≡ 0."},
{n:"19",q:"Name the four basic motions of a fluid element.",a:"Translation, rotation, angular deformation, linear deformation",why:"Moves · turns as one piece · angle between sides changes · stretches/contracts normally."},
{n:"20",q:"Which two basic motions involve angular motion?",a:"Rotation and angular deformation",why:"ω_z = ½(∂v/∂x − ∂u/∂y); S_z = ∂v/∂x + ∂u/∂y."},
{n:"21",q:"How is angular velocity ω related to the curl of velocity?",a:"ω = ½ ∇×V",why:"The ½ comes from averaging two sides: ΔR = ½(Δα − Δβ)."},
{n:"22",q:"How is vorticity ζ related to ω and the curl?",a:"ζ = ∇×V = 2ω",why:"Vorticity is the curl itself; angular velocity is half of it."},
{n:"23",q:"How do you judge if a 2-D flow is irrotational?",a:"∂v/∂x − ∂u/∂y = 0 (ω_z = 0)",why:"In general ∇×V = 0. Cylindrical: (1/r)[∂(rV_θ)/∂r − ∂V_r/∂θ] = 0. Stream function: ∇²ψ = 0."},
{n:"24",q:"Couette flow, u = u(y), v = 0: rotational or irrotational?",a:"Rotational: ω_z = −½ du/dy ≠ 0",why:"Rotation is about element spin, not path shape. A free vortex has curved streamlines but is irrotational."},
{n:"25",q:"Define circulation.",a:"Γ = ∮_C V·dr",why:"Line integral of tangential velocity around a closed curve. Scalar, on a loop (global)."},
{n:"26",q:"What does Stokes' theorem relate?",a:"∮ V·dr = ∬ (∇×V)·n̂ dA",why:"A closed line integral to the surface integral of the curl (1-D ↔ 2-D). Green's theorem is the flat 2-D case."},
{n:"27",q:"What is Γ for an irrotational flow?",a:"0 for any closed loop in the region",why:"Γ = 0 on one loop doesn't prove ζ = 0 everywhere inside; vorticity can cancel."},
{n:"28",q:"What is a Newtonian fluid?",a:"Shear stress ∝ shear rate: τ_yx = μ du/dy",why:"Shear rate du/dy equals the angular deformation rate dα/dt."},
{n:"29",q:"What does Stokes' hypothesis assume?",a:"Linear stress–velocity-gradient relation",why:"σ_xx = −p + 2μ ∂u/∂x; τ_xy = μ(∂v/∂x + ∂u/∂y). Substituted into ρDV/Dt = ∇·τ + ρf it gives Navier-Stokes."},
{n:"30",q:"Dynamic vs kinematic viscosity?",a:"ν = μ/ρ",why:"μ (Pa·s) relates stress to shear rate; ν (m²/s) is momentum diffusivity."},
{n:"31",q:"Write the incompressible Navier-Stokes equation under gravity.",a:"ρ DV/Dt = −∇p + μ∇²V + ρg",why:"∂V/∂t transient + V·∇V convection = −(1/ρ)∇p pressure gradient + ν∇²V diffusion + g gravity."},
{n:"32",q:"Convection vs diffusion: which depends on flow direction?",a:"Convection (V·∇)",why:"Convection is macro-scale flow. Diffusion (ν∇², α∇²) is molecular (Brownian) and acts in all directions."},
{n:"33",q:"Define the 2-D stream function (rectangular).",a:"u = ∂ψ/∂y, v = −∂ψ/∂x",why:"Cylindrical: V_r = (1/r)∂ψ/∂θ, V_θ = −∂ψ/∂r."},
{n:"34",q:"Why does ψ automatically satisfy continuity?",a:"∂²ψ/∂x∂y − ∂²ψ/∂y∂x ≡ 0",why:"Mixed partials commute, so any smooth ψ gives a divergence-free field."},
{n:"35",q:"What is true of ψ along a streamline?",a:"It is constant (dψ = 0)",why:"Follows from the streamline slope dy/dx = v/u. No flow crosses a streamline."},
{n:"36",q:"Physical meaning of ψ₂ − ψ₁?",a:"Volumetric flow rate per unit depth between the two streamlines",why:"Q = ∫u dy = ψ₂ − ψ₁ (m²/s in 2-D). Streamlines close together → high velocity."},
{n:"37",q:"Three driving forces for flow motion?",a:"Pressure gradient, shear stress, body force",why:"From ρ DV/Dt = −∇p + ∇·τ + ρf."},
{n:"38",q:"Poiseuille flow is driven by?",a:"A constant pressure gradient in a closed channel",why:"∂p/∂x = constant, e.g. pipe flow."},
{n:"39",q:"Couette flow is driven by?",a:"Viscous shear from a moving plate",why:"One plate fixed, the other at constant speed U. Example 9 (rotating cylinders) is also shear-driven."},
{n:"40",q:"Example of body-force-driven flow?",a:"Gravity-driven film down an incline / over a dam",why:"Example 8: ∂p/∂x = 0, driven by ρg sinθ."},
{n:"41",q:"What is a conservative velocity field?",a:"∫V·dr between two points is path-independent",why:"∫_C1 V·dr = ∫_C2 V·dr for any two paths from P1 to P2."},
{n:"42",q:"How do you judge if a velocity field is conservative?",a:"Irrotational (∇×V = 0) ⇒ conservative",why:"Loop C = C1 − C2; Stokes gives Γ = 0, so ∫_C1 = ∫_C2. Gravity g is also conservative."},
{n:"43",q:"Integral vs differential governing equations?",a:"Integral: finite control volume · Differential: exact balance at a point",why:"Both come from mass, momentum and energy conservation."},
{n:"44",q:"No-slip boundary condition, and its type?",a:"Fluid velocity = wall velocity (u = v = 0 at a fixed wall); Dirichlet",why:"Dirichlet specifies the value."},
{n:"45",q:"Free-surface boundary condition, and its type?",a:"∂u/∂y = 0 and p = p₀; Neumann for velocity",why:"Neumann specifies the derivative. Used in Example 8."},
{n:"46",q:"When does the thermal energy equation reduce to heat conduction?",a:"No flow (still fluid or solid), so V·∇T = 0",why:"∂T/∂t = α∇²T + S; if steady, α∇²T + S = 0 (Poisson). α = k/(ρC_p)."}
];
return {D};
})());
