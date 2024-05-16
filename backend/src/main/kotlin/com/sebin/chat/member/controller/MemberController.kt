package com.sebin.chat.member.controller

import io.github.oshai.kotlinlogging.KotlinLogging
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

private val logger = KotlinLogging.logger {}

@RequestMapping("/api/v1/member")
@RestController
class MemberController {
    @PostMapping
    fun createMember() {
        logger.info { "createMember() 호출" }
    }
}