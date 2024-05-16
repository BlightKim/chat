package com.sebin.chat.member.controller

import com.sebin.chat.member.dto.MemberCreate
import io.github.oshai.kotlinlogging.KotlinLogging
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

private val logger = KotlinLogging.logger {}

@RequestMapping("/api/v1/member")
@RestController
class MemberController {
    @PostMapping
    fun createMember(@RequestBody memberCreate: MemberCreate) {
        logger.info { "createMember() 호출" }

        logger.info { "memberCreate : $memberCreate" }

    }
}