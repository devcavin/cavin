export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-auth-with-spring-boot",
    title: "Building a Secure Authentication System with Spring Boot and JWT",
    description: "A comprehensive guide to implementing JWT-based authentication in Spring Boot, covering token generation, validation, and refresh token strategies.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["Spring Boot", "Security", "JWT", "Backend"],
    published: true,
    content: `
# Building a Secure Authentication System with Spring Boot and JWT

Authentication is the cornerstone of modern web applications. In this guide, I'll walk you through building a production-ready authentication system using Spring Boot and JWT tokens.

## Why JWT?

JSON Web Tokens (JWT) provide a stateless authentication mechanism that's perfect for modern microservices architectures. Unlike session-based authentication, JWTs don't require server-side storage, making them highly scalable.

## Architecture Overview

Our authentication system will have three main components:

1. **Authentication Filter** - Intercepts requests and validates tokens
2. **Token Service** - Generates and validates JWT tokens
3. **User Service** - Manages user credentials and roles

## Implementation

### 1. Setting Up Dependencies

First, add the required dependencies to your \`pom.xml\`:

\`\`\`xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>
\`\`\`

### 2. Creating the Token Service

The token service handles JWT generation and validation:

\`\`\`kotlin
@Service
class TokenService {
    private val secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256)
    
    fun generateToken(username: String): String {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(Date())
            .setExpiration(Date(System.currentTimeMillis() + 86400000))
            .signWith(secretKey)
            .compact()
    }
}
\`\`\`

### 3. Implementing Refresh Tokens

Refresh tokens extend session lifetime securely. Store them in Redis with TTL:

\`\`\`kotlin
@Service
class RefreshTokenService(
    private val redisTemplate: RedisTemplate<String, String>
) {
    fun createRefreshToken(username: String): String {
        val token = UUID.randomUUID().toString()
        redisTemplate.opsForValue()
            .set("refresh:$username", token, 7, TimeUnit.DAYS)
        return token
    }
}
\`\`\`

## Security Best Practices

1. **Use strong secret keys** - Never hardcode secrets
2. **Implement token rotation** - Refresh tokens should be single-use
3. **Set appropriate expiration** - Access tokens: 15 min, Refresh: 7 days
4. **Validate on every request** - Don't trust client-side validation

## Testing Your Implementation

Always test your authentication flow:

\`\`\`kotlin
@Test
fun \`should generate valid JWT token\`() {
    val token = tokenService.generateToken("testuser")
    val claims = tokenService.validateToken(token)
    assertEquals("testuser", claims.subject)
}
\`\`\`

## Conclusion

Building a secure authentication system requires careful consideration of security best practices. The implementation shown here provides a solid foundation that you can extend based on your specific requirements.

**Next Steps:**
- Add OAuth2 support for social login
- Implement rate limiting
- Add two-factor authentication
- Monitor token usage patterns

---

*Have questions about this implementation? Feel free to reach out!*
    `
  },
  {
    slug: "fiber-optic-installation-guide",
    title: "Fiber Optic Installation Best Practices: Lessons from the Field",
    description: "Practical insights and techniques for fiber optic cable installation, splicing, and troubleshooting based on real-world experience in network deployment.",
    date: "2025-01-10",
    readTime: "6 min read",
    tags: ["Networking", "Fiber Optics", "Infrastructure"],
    published: true,
    content: `
# Fiber Optic Installation Best Practices

Working as a Network Technician at WECONNECT WIFI has given me hands-on experience with fiber optic installations. Here's what I've learned from deploying fiber networks across Meru, Kenya.

## Understanding Fiber Types

**Single-mode vs Multi-mode:**
- Single-mode: Long-distance (up to 40km), higher bandwidth
- Multi-mode: Short-distance (up to 2km), more cost-effective

## Installation Techniques

### 1. Cable Handling
Always maintain minimum bend radius (15x cable diameter). Excessive bending causes signal loss.

### 2. Splicing Methods
- **Fusion splicing**: Lower loss (0.1dB), more reliable
- **Mechanical splicing**: Faster, higher loss (0.5dB)

### 3. Testing
Use OTDR (Optical Time Domain Reflectometer) to:
- Measure total loss
- Identify break points
- Verify splice quality

## Common Issues & Solutions

**High signal loss?**
- Check for microbends in cables
- Verify connector cleanliness
- Re-splice if loss > 0.3dB

**Intermittent connectivity?**
- Secure all connections
- Check for water ingress
- Verify power levels

## Tools of the Trade

Essential equipment:
- Fusion splicer
- Fiber cleaver
- OTDR
- Power meter
- Visual fault locator

## Conclusion

Quality fiber installation requires attention to detail and proper technique. Following these best practices ensures reliable, high-performance networks.
    `
  },
  {
    slug: "api-design-best-practices",
    title: "API Design Best Practices: What I've Learned as a Postman Student Leader",
    description: "Essential principles for designing clean, maintainable RESTful APIs based on experience mentoring developers and building production systems.",
    date: "2025-01-05",
    readTime: "7 min read",
    tags: ["API", "REST", "Backend", "Postman"],
    published: true,
    content: `
# API Design Best Practices

As a Postman Student Leader, I've mentored dozens of developers on API design. Here are the principles that consistently lead to better APIs.

## Core Principles

### 1. Use Meaningful Resource Names
\`\`\`
    GET /api/v1/users/123/orders
    GET /api/v1/getUserOrders?userId=123
\`\`\`

### 2. Implement Proper HTTP Methods
- GET: Retrieve data
- POST: Create resources
- PUT: Update entire resource
- PATCH: Partial update
- DELETE: Remove resource

### 3. Version Your API
\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

## Response Structure

Always return consistent response formats:

\`\`\`json
{
  "status": "success",
  "data": {
    "user": {
      "id": 123,
      "name": "John Doe"
    }
  },
  "meta": {
    "timestamp": "2025-01-05T10:30:00Z"
  }
}
\`\`\`

## Error Handling

Provide clear, actionable error messages:

\`\`\`json
{
  "status": "error",
  "error": {
    "code": "INVALID_EMAIL",
    "message": "Email format is invalid",
    "field": "email"
  }
}
\`\`\`

## Authentication & Security

- Use OAuth 2.0 or JWT for authentication
- Always use HTTPS
- Implement rate limiting
- Validate all inputs

## Documentation

Good documentation is crucial:
- Use OpenAPI/Swagger specifications
- Provide code examples
- Include error scenarios
- Keep it updated

## Testing with Postman

Create comprehensive test collections:

\`\`\`javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has user data", function () {
    pm.expect(pm.response.json()).to.have.property('data');
});
\`\`\`

## Conclusion

Great API design is about making developers' lives easier. Focus on consistency, clarity, and comprehensive documentation.

---

*Want to learn more about API design? Check out my Postman workshops!*
    `
  }
];

export function getPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.published);
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return getPublishedPosts().slice(0, limit);
}